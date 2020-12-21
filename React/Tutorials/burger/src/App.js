import React, { Component } from 'react';
import Layout from './Containers/Layout/Layout'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Orders from './Containers/Orders/Orders';
import Checkout from './Containers/Checkout/Checkout';
import './App.css';
import Auth from './Containers/Auth/Auth';
import {connect} from 'react-redux';
import {Route,Switch,withRouter} from 'react-router-dom';
import Logout from './Containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';


class App extends Component
{
  componentDidMount()
  {
    this.props.onTryAutoSignUp();
  }
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


const mapDisaptchToProps = dispatch =>
{
  return {
    onTryAutoSignUp: ()=>{ dispatch(actions.authCheckState())}
  }
}
export default withRouter(connect(null,mapDisaptchToProps)(App));
