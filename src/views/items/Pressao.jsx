import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import Header from '../../components/layout/Header'

const Pressao = (props) => {

    return (
        <div className="Pressao">
            <Header dados={<>
                <span>idade: 20y </span>
                <span>altura: 1.84m </span>
                <span>peso: 93kg </span>
            </>} />
            <SectionTitle title="Pressão" />
        </div>
    )
}

export default Pressao
