import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import Header from '../../components/layout/Header'

const NivelEstresse = (props) => {

    return (
        <div className="NivelEstresse">
            <Header dados={<>
                <span>idade: 20y </span>
                <span>altura: 1.84m </span>
                <span>peso: 93kg </span>
            </>} />
            <SectionTitle title="Estresse" />
        </div>
    )
}

export default NivelEstresse
