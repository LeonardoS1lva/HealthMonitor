import "../css/ListaColaboradores.css"
import React from 'react'
import Header from '../../components/layout/Header'

import dados from '../../data/gerados.json'

const ListaColaboradores = (props) => {


    function gerarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    

    const saude1 = 72;
    const saude2 = 55;
    const saude3 = 99;

    const colorBar = (saude) => {
        if (`${saude}` < 20) {
            return "red";
        } else if (`${saude}` >= 20 && `${saude}` < 40) {
            return "yellow";
        } else if (`${saude}` >= 40 && `${saude}` < 60) {
            return "orange";
        } else if (`${saude}` >= 60 && `${saude}` < 80) {
            return "lightGreen";
        } else if (`${saude}` >= 80) {
            return "green";
        }
    }

    return (
        <div className="ListaColaboradores">
            <h2 className="title">Lista de Colaboradores</h2>

            {
                dados.map((item, index) => {
                    let saude = gerarNumeroAleatorio(0, 100);
                    return (
                        <Header nome={item.name} image={item.image} dados={<>
                            <progress className={`progress ${colorBar(saude)}`} value={saude} max={100}></progress>
                            <span>Saúde {saude}%</span>
                        </>} />
                    )
                })
            }
        </div>
    )
}

export default ListaColaboradores
