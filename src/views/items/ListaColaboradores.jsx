import "../css/ListaColaboradores.css"
import React from 'react'
import Header from '../../components/layout/Header'

const ListaColaboradores = (props) => {

    return (
        <div className="ListaColaboradores">
            <h2 className="title">Lista de Colaboradores</h2>
            <Header dados={<>
                <progress className="progress" value={72} max={100}></progress>
                <span>Saúde {0}%</span>
            </>} />
            <Header />
            <Header />
        </div>
    )
}

export default ListaColaboradores
