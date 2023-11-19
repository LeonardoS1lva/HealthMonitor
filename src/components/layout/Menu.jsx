import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/ListaColaboradores">Lista de Colaboradores</Link>
                </li>
                <li>
                    <Link to="/TelaColaborador">Visualizar Perfil</Link>
                </li>
                <li>
                    <Link to="/FormularioFuncionario">Registrar Funcionário</Link>
                </li>
                <li>
                    <Link to="/FormularioClinico">Registrar Dados</Link>
                </li>
                <li>
                    <Link to="/FrequenciaCardiaca">Frequência Cardíaca</Link>
                </li>
                <li>
                    <Link to="/AtividadeFisica">Atividade Física</Link>
                </li>
                <li>
                    <Link to="/MonitoramentoSono">Sono</Link>
                </li>
                <li>
                    <Link to="/Pressao">Pressão</Link>
                </li>
                <li>
                    <Link to="/OximetriaPulso">Oximetria</Link>
                </li>
                <li>
                    <Link to="/NivelEstresse">Estresse</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu