import './Content.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../views/items/Home'
import NotFound from '../../views/items/NotFound'
import FrequenciaCardiaca from '../../views/items/FrequenciaCardiaca'
import MonitoramentoSono from '../../views/items/MonitoramentoSono'
import OximetriaPulso from '../../views/items/OximetriaPulso'
import NivelEstresse from '../../views/items/NivelEstresse'
import FormularioClinico from '../../views/items/FormularioClinico'
import TelaColaborador from '../../views/items/TelaColaborador'
import FormularioFuncionario from '../../views/items/FormularioFuncionario'
import AtividdeFisica from '../../views/items/AtividadeFisica'
import Pressao from '../../views/items/Pressao'
import ListaColaboradores from '../../views/items/ListaColaboradores'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/listaColaboradores">
                <ListaColaboradores />
            </Route>
            <Route path="/telaColaborador">
                <TelaColaborador />
            </Route>
            <Route path="/formularioFuncionario">
                <FormularioFuncionario />
            </Route>
            <Route path="/formularioClinico">
                <FormularioClinico />
            </Route>
            <Route path="/frequenciaCardiaca">
                <FrequenciaCardiaca />
            </Route>
            <Route path="/atividadeFisica">
                <AtividdeFisica />
            </Route>
            <Route path="/monitoramentoSono">
                <MonitoramentoSono />
            </Route>
            <Route path="/pressao">
                <Pressao />
            </Route>
            <Route path="/oximetriaPulso">
                <OximetriaPulso />
            </Route>
            <Route path="/nivelEstresse">
                <NivelEstresse />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </main>
)

export default Content