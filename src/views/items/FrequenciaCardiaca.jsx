import "../css/FrequenciaCardiaca.css"
import React from 'react'
import SectionTitle from '../../components/layout/SectionTitle'
import Header from '../../components/layout/Header'

const FrequenciaCardiaca = (props) => {

    return (
        <div className="FrequenciaCardiaca">
            <Header dados={<>
                <span>idade: 20y </span>
                <span>altura: 1.84m </span>
                <span>peso: 93kg </span>
            </>} />
            <SectionTitle title="Cardíaco" />
        </div>
    )
}

export default FrequenciaCardiaca
