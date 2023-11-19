import "../css/FormularioClinico.css"
import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const FormularioClinico = (props) => {

    return (
        <div className="FormularioClinico">
            <PageTitle
                title="Cadastrar Dados Clínicos"
            />
            <SectionTitle title="Formulário" />
            <div className='cadastro'>
                <div className="container-item">
                    <label htmlFor="txtMatricula">Matrícula: </label>
                    <input
                        id='txtMatricula'
                        type="number"
                    />
                </div>
                <div className="container-item">
                    <label htmlFor="dataRegistro">Data: </label>
                    <input
                        id='dataRegistro'
                        type="date"
                    />
                </div>
                <div className="container-item">
                    <label htmlFor="txtGlicose">Nivel de Glicose: </label>
                    <input
                        id='txtGlicose'
                        type="number"
                    />
                </div>
                <div className="container-item">
                    <label htmlFor="txtColesterol">Colesterol: </label>
                    <input
                        id='txtColesterol'
                        type="text"
                    />
                </div>
                <div className="container-item">
                    <label htmlFor="historicoDoencas">Histórico de Doenças: </label>
                    <input
                        id='historicoDoencas'
                        type="text"
                    />
                </div>
                <div className="container-item">
                    <label htmlFor="txtPeso">Peso: </label>
                    <input
                        id='txtPeso'
                        type="text"
                    />
                </div>
                <div className="container-item">
                    <label htmlFor="txtAltura">Altura: </label>
                    <input
                        id='txtAltura'
                        type="text"
                    />
                </div>
                <button>Limpar</button>
                <button>Cadastrar</button>

            </div>
        </div>
    )
}

export default FormularioClinico
