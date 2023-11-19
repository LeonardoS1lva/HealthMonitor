import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import Header from '../../components/layout/Header'

const OximetriaPulso = (props) => {

    return (
        <div className="OximetriaPulso">
            <Header dados={<>
                <span>idade: 20y </span>
                <span>altura: 1.84m </span>
                <span>peso: 93kg </span>
            </>} />
            <SectionTitle title="Oxigenio" />
        </div>
    )
}

export default OximetriaPulso
