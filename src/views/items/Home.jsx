import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

const Home = props => (
    <div className="Home">
        <PageTitle title="Monitor de Saúde" subtitle="Bem vindo!" />
        <img style={{marginTop: "-2rem"}} src="/banner.jpeg" width="100%" height="800x" alt="" />
    </div>
)

export default Home