import './Header.css'
import React from 'react'

const Header = props => (
    <header className="cabecalho">
        <aside>
            <svg xmlns="http://www.w3.org/2000/svg" width="143" height="199" viewBox="0 0 143 199" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M71.5 95C97.7335 95 119 73.7335 119 47.5C119 21.2665 97.7335 0 71.5 0C45.2665 0 24 21.2665 24 47.5C24 73.7335 45.2665 95 71.5 95ZM71.5 95H93C120.614 95 143 117.386 143 145V199H0V145C0 117.386 22.3858 95 50 95H71.5Z" fill="#00784D" />
            </svg>
        </aside>
        <div className="informacoesPessoais">
            <h2>Nome Completo do Colaborador</h2>
            <div>
                {props.dados}
            </div>
            {/* <span className="nomeLogo">Monitor de Saúde </span> */}
        </div>
    </header>
)

export default Header