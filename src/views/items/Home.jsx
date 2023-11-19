import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

const Home = props => (
    <div className="Home">
        <PageTitle
            title="Health Monitor"
            subtitle="Monitoramento de Saúde." />
        
        <center><img src="/banner.jpg" width="800px" alt="" /></center>
    </div>
)

export default Home