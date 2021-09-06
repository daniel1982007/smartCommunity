import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Community from './Community'
import Realestate from './Realestate'
import Owner from './Owner'
import Payment from './Payment'
import Smartparking from './Smartparking'
import Equipment from './Equipment'
import Setting from './Setting'
import Guardcheck from './Guardcheck'
import Statistic from './Statistic'

const Page = () => {
    return (
        <div className='page'>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/community'>
              <Community />
            </Route>
            <Route path='/realestate'>
              <Realestate />
            </Route>
            <Route path='/owner'>
              <Owner />
            </Route>
            <Route path='/payment'>
              <Payment />
            </Route>
            <Route path='/smartparking'>
              <Smartparking />
            </Route>
            <Route path='/equipment'>
              <Equipment />
            </Route>
            <Route path='/setting'>
              <Setting />
            </Route>
            <Route path='/guardcheck'>
              <Guardcheck />
            </Route>
            <Route path='/statistic'>
              <Statistic />
            </Route>
          </Switch>
        </div>
    )
}

export default Page