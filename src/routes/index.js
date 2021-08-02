import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import WorkPlace from '../pages/WorkPlaces'

import Profile from '../pages/Profile'
import Adm from '../pages/Adm'
import Area from '../pages/Area'
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import Logs from '../pages/Logs';
import Responsibles from '../pages/Responsibles';


const Routes =()=>{
    return(
        <BrowserRouter>
         < Header/>
         <Sidebar/>
       
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/workplaces' component={WorkPlace}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/adm' component={Adm}/>
            <Route exact path='/area' component={Area}/>
            <Route exact path='/skills' component={Skills}/>
            <Route exact path='/logs' component={Logs}/>
            <Route exact path='/responsibles' component={Responsibles}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Routes;