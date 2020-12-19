import React, { Component } from 'react';
import Layout from './Containers/Layout/Layout'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Orders from './Containers/Orders/Orders';
import Checkout from './Containers/Checkout/Checkout';
import './App.css';
import Auth from './Containers/Auth/Auth';

import {Route,Switch} from 'react-router-dom';
import Logout from './Containers/Auth/Logout/Logout';


class App extends Component
{
  render()
  {
    return (
      
      <div className="App">
          <Layout>
            <Switch>
            <Route path='/checkout' component={Checkout}/>
            <Route path='/orders' component={Orders}/>
            <Route path='/auth' component={Auth}/>
            <Route path='/logout' component={Logout}/>
            <Route path='/' exact component={ BurgerBuilder }/>
            </Switch>
          </Layout>
          
      </div>
    );
  }
}


export default App;
