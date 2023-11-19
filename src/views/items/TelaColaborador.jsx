import { useState, useEffect } from "react"
import "../css/TelaColaborador.css"
import React from 'react'
import Header from "../../components/layout/Header";

import dados from '../../data/gerados.json'

import { useLocation } from 'react-router-dom';

const TelaColaborador = (props) => {

    // Get the location object
    const location = useLocation();

    // Extract query parameters using URLSearchParams
    const queryParams = new URLSearchParams(location.search);

    const [colaborador, setColaborador] = useState(null)

    useEffect(() => {
        let id = queryParams.get('id');
        if(!id) return

        let colaborador = dados.find(c => c.id == id) || null
        setColaborador(colaborador)
    }, [])

    function gerarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function gerarPressao() {
        let p1 = gerarNumeroAleatorio(90, 140)
        let p2 = gerarNumeroAleatorio(60, 90)
        return parseFloat(`${(parseInt(p1 / 10))}.${(parseInt(p2 / 10))}`)
    }

    const [valueHealth, setValueHealth] = useState(gerarNumeroAleatorio(10, 100));
    const [valueBPM, setBPM] = useState(gerarNumeroAleatorio(60, 100));
    const [valueAF, setAF] = useState(gerarNumeroAleatorio(0, 100));
    const [valueSono, setSono] = useState(gerarNumeroAleatorio(0, 16));
    const [valuePress, setPress] = useState(gerarPressao());
    const [valuePulso, setPulso] = useState(gerarNumeroAleatorio(80, 100));
    const [valueStress, setStress] = useState(gerarNumeroAleatorio(0, 100));

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
            return "Sedentário"
        } else if (valueAF >= 20 && valueAF < 40) {
            return "Pouco Ativo"
        } else if (valueAF >= 40 && valueAF < 60) {
            return "Ativo"
        } else if (valueAF >= 60 && valueAF < 80) {
            return "Muito Ativo"
        } else if (valueAF >= 80) {
            return "Extremamente Ativo"
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

    const colorBar = (saude) => {
        if (saude < 20) {
            return "red";
        } else if (saude >= 20 && saude < 40) {
            return "yellow";
        } else if (saude >= 40 && saude < 60) {
            return "orange";
        } else if (saude >= 60 && saude < 80) {
            return "lightGreen";
        } else if (saude >= 80) {
            return "green";
        }
    }
    return (
        <div className="TelaColaborador">
            <Header nome={colaborador?.name} image={colaborador?.image} />
            <main>
                <section className="informacoes">
                    <h2>Mapa de Saúde</h2>
                    <div className="informacaoGeral">
                        <progress className={`progress ${colorBar(valueHealth)}`} value={valueHealth} max={100}></progress>
                        <span className="itemProgress health">Saúde {valueHealth}%</span>
                    </div>
                    <ul>
                        <li>
                            <progress className="progress green" value={valueBPM} max={100}></progress>
                            <span className="itemProgress">{valueBPM} BPM/s</span>
                        </li>
                        <li>
                            <progress className="progress green" value={valueAF} max={100}></progress>
                            <span className="itemProgress">AF {calcAF()}</span>
                        </li>
                        <li>
                            <progress className="progress green" value={valueSono} max={24}></progress>
                            <span className="itemProgress">Sono {valueSono}h/dia</span>
                        </li>
                        <li>
                            <progress className="progress green" value={valuePress} max={100}></progress>
                            <span className="itemProgress">Pressão {valuePress} mmHg</span>
                        </li>
                        <li>
                            <progress className="progress green" value={valuePulso} max={100}></progress>
                            <span className="itemProgress">Oxímetro {valuePulso}%</span>
                        </li>
                        <li>
                            <progress className="progress green" value={valueStress} max={100}></progress>
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
