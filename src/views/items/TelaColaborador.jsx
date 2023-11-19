import { useState } from "react"
import "../css/TelaColaborador.css"
import React from 'react'
import Header from "../../components/layout/Header";

const TelaColaborador = (props) => {

    const [valueHealth, setValueHealth] = useState(72);
    const [valueBPM, setBPM] = useState(22);
    const [valueAF, setAF] = useState(70);
    const [valueSono, setSono] = useState(8);
    const [valuePress, setPress] = useState(51);
    const [valuePulso, setPulso] = useState(80);
    const [valueStress, setStress] = useState(72);

    const calcBarSono = () => {
        if (valueSono < 6 || valueSono > 9) {
            return (
                <div>
                    <h3>Sono</h3>
                    <h3>
                        Recomenda-se uma duração de sono para 6h a 9h, garantindo um sono saudável.
                    </h3>
                </div>
            )
        }
    }

    const calcOximetro = () => {
        if (valuePulso < 80) {
            return (
                <div>
                    <h3>Oximetria de Pulso</h3>
                    <h3>
                        Recomenda-se procurar urgentemente auxílio médico.
                    </h3>
                </div>
            )
        }
    }

    const calcAF = () => {
        if (valueAF < 20) {

        } else if (valueAF >= 20 && valueAF < 40) {

        } else if (valueAF >= 40 && valueAF < 60) {

        } else if (valueAF >= 60 && valueAF < 80) {
            return "Em Forma"
        } else if (valueAF >= 80) {

        }
    }

    const calcEstresse = () => {
        if (valueStress < 40) {
            return "Relaxado";
        } else if (valueStress >= 40 && valueStress < 60) {
            return "Leve";
        } else if (valueStress >= 60 && valueStress < 80) {
            return "Moderado";
        } else if (valueStress >= 80) {
            return "Alto";
        }
    }

    return (
        <div className="TelaColaborador">
            <Header />
            <main>
                <section className="informacoes">
                    <h2>Mapa de Saúde</h2>
                    <div className="informacaoGeral">
                        <progress className={`progress`} value={valueHealth} max={100}></progress>
                        <span className="itemProgress health">Saúde {valueHealth}%</span>
                    </div>
                    <ul>
                        <li>
                            <progress className="progress" value={valueBPM} max={100}></progress>
                            <span className="itemProgress">{valueBPM} BPM/s</span>
                        </li>
                        <li>
                            <progress className="progress" value={valueAF} max={100}></progress>
                            <span className="itemProgress">AF {calcAF()}</span>
                        </li>
                        <li>
                            <progress className="progress" value={valueSono} max={24}></progress>
                            <span className="itemProgress">Sono {valueSono}h/dia</span>
                        </li>
                        <li>
                            <progress className="progress" value={valuePress} max={100}></progress>
                            <span className="itemProgress">Pressão {valuePress}???</span>
                        </li>
                        <li>
                            <progress className="progress" value={valuePulso} max={100}></progress>
                            <span className="itemProgress">Oxímetro {valuePulso}%</span>
                        </li>
                        <li>
                            <progress className="progress" value={valueStress} max={100}></progress>
                            <span className="itemProgress">Estresse {calcEstresse()}</span>
                        </li>
                    </ul>
                </section>
                <section className="informacoes">
                    <h2>Recomendações</h2>
                    {calcBarSono()}
                    {calcOximetro()}
                </section>
            </main>
        </div>
    )
}

export default TelaColaborador
