import React, { Component } from 'react';
import Layout from './Containers/Layout/Layout'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout';
import './App.css';

class App extends Component
{
  render()
  {
    return (
      
      <div className="App">
          <Layout><BurgerBuilder/></Layout>
          <Checkout/>
      </div>
    );
  }
}


export default App;
