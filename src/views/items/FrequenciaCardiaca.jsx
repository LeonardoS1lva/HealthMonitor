import "../css/FrequenciaCardiaca.css"
import React, { useEffect } from 'react'
import SectionTitle from '../../components/layout/SectionTitle'
import Header from '../../components/layout/Header'
import dados from '../../data/gerados.json'

const FrequenciaCardiaca = (props) => {

    const [select, setSelect] = React.useState(dados[0].id)
    const [nomeColaborador, setNomeColaborador] = React.useState(dados[0].name)
    const [imageColaborador, setImageColaborador] = React.useState(dados[0].image)

    const chartRef = React.useRef()

    const mapDataValores = () => {
        let filtrado = dados.filter(item => item.id === Number(select))
        filtrado = filtrado[0]
        let valores = filtrado.frequencia_cardiaca.slice(-10)
        let data = []
        let value = []
        for (const it of valores) {
            data.push(it.data)
            value.push(it.freq)
        }
        return { data, value }
    }

    useEffect(() => {
        let { data, value } = mapDataValores(dados)
        const chartConfig = {
            type: 'line',
            data: {
                labels: data,
                datasets: [{
                    label: "Frequência Cardíaca (bpm)",
                    data: value,
                }],
            },
        };

        // Criação do gráfico
        const myChart = new window.Chart(chartRef.current, chartConfig);

        return () => {
            myChart.destroy();
        };

    }, [select])

    return (
        <div className="FrequenciaCardiaca">
            <Header nome={nomeColaborador} image={imageColaborador} dados={<>
                <span>idade: 20y </span>
                <span>altura: 1.84m </span>
                <span>peso: 93kg </span>
            </>} />
            <SectionTitle title="Cardíaco" />

            <select
                value={select}
                onChange={e => {
                    setSelect(e.target.value)
                    setNomeColaborador(e.target.options[e.target.selectedIndex].text)
                    let image = dados.filter(item => item.id === Number(e.target.value))[0].image
                    setImageColaborador(image)
                }}>
                {
                    dados.map((item, index) => {
                        return <option key={index} value={item.id}>{item.name}</option>
                    })
                }
            </select>

            <hr />

            <canvas ref={chartRef} width="400" height="200"></canvas>
        </div>
    )
}

export default FrequenciaCardiaca
