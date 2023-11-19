import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import Header from '../../components/layout/Header'

const AtividdeFisica = (props) => {

    return (
        <div className="AtividdeFisica">
            <Header dados={<>
                <span>idade: 20y </span>
                <span>altura: 1.84m </span>
                <span>peso: 93kg </span>
            </>} />
            <SectionTitle title="AF" />
        </div>
    )
}

export default AtividdeFisica
