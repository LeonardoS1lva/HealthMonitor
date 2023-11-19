import './Header.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Header = props => (
    <Link to={`/TelaColaborador?id=${props.id}`}>
    <header className="cabecalho">
        <aside>
            
                <img src={props?.image} alt="Imagem Profile" />
            
        </aside>
        <div className="informacoesPessoais">
            <h2>{props?.nome || "Nome Completo do Colaborador"}</h2>
            <div>
                {props.dados}
            </div>
            {/* <span className="nomeLogo">Monitor de Saúde </span> */}
        </div>
    </header>
    </Link>
)

export default Header