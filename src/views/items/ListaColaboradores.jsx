import "../css/ListaColaboradores.css"
import React from 'react'
import Header from '../../components/layout/Header'

const ListaColaboradores = (props) => {

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
            <Header dados={<>
                <progress className={`progress ${colorBar(saude1)}`} value={saude1} max={100}></progress>
                <span>Saúde {saude1}%</span>
            </>} />
            <Header dados={<>
                <progress className={`progress ${colorBar(saude2)}`} value={saude2} max={100}></progress>
                <span>Saúde {saude2}%</span>
            </>} />
            <Header dados={<>
                <progress className={`progress ${colorBar(saude3)}`} value={saude3} max={100}></progress>
                <span>Saúde {saude3}%</span>
            </>} />
        </div>
    )
}

export default ListaColaboradores
