import React, { Component } from 'react';
import Layout from './Containers/Layout/Layout'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Orders from './Containers/Orders/Orders';
import Checkout from './Containers/Checkout/Checkout';
import './App.css';

import {Route,Switch} from 'react-router-dom';


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
            <Route path='/' exact component={ BurgerBuilder }/>
            </Switch>
          </Layout>
          
      </div>
    );
  }
}


export default App;
