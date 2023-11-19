import "../css/FormularioFuncionario.css"
import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const FormularioFuncionario = (props) => {

    return (
        <div className="FormularioFuncionario">
            <PageTitle
                title="Cadastrar Funcionário"
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
                    <label htmlFor="txtNome">Nome: </label>
                    <input
                        id='txtNome'
                        type="text"
                    />
                </div>
                <div className="container-item">
                    <label htmlFor="txtCargo">Cargo: </label>
                    <input
                        id='txtCargo'
                        type="text"
                    />
                </div>
                <div className="container-item">
                    <label htmlFor="txtNascimento">Data de Nascimento: </label>
                    <input
                        id='txtNascimento'
                        type="date"
                    />
                </div>
                <div className="container-item">
                    <label htmlFor="txtSexo">Sexo: </label>
                    <input
                        id='txtSexo'
                        type="text"
                    />
                </div>
                <div className="container-item">
                    <label htmlFor="txtCPF">CPF: </label>
                    <input
                        id='txtCPF'
                        type="number"
                    />
                </div>
                
                <button>Limpar</button>
                <button>Cadastrar</button>

            </div>
        </div>
    )
}

export default FormularioFuncionario
