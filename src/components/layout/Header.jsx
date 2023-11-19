import './Header.css'
import React from 'react'

const Header = props => (
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
)

export default Header