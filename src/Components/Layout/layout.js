 import React from 'react'
 import { Route, Switch } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Navigation from '../Navigation/Navigation';
import Home from '../Sample/Home';
import './Layout.css'

const layout =() => {
     return(
       <div className="backgroundColor">
        <div className="col-md-12 col-sm-12">
        <Navigation/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/signup' exact component={SignUp} />
            <Route path='/signin' exact component={SignIn} />
          </Switch>
      </div>
      </div>
     )
 }

 export default layout;