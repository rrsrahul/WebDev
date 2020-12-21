import React, { Component } from 'react';
import Layout from './Containers/Layout/Layout'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Orders from './Containers/Orders/Orders';
import Checkout from './Containers/Checkout/Checkout';
import './App.css';
import Auth from './Containers/Auth/Auth';
import {connect} from 'react-redux';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
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
    let routes = (<Switch>
            <Route path='/auth' component={Auth}/>
            <Route path='/' exact component={ BurgerBuilder }/>
            <Redirect to='/'/>
            </Switch>

    )
    if(this.props.isAuth)
    {
      routes=(
        <Switch>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/orders' component={Orders}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/' exact component={ BurgerBuilder }/>
        <Redirect to='/'/>
        </Switch>
      )
    }
    return (
      
      <div className="App">
          <Layout>
           {routes}
          </Layout>
          
      </div>
    );
  }
}

const mapStateToProps = state =>
{
  return {
    isAuth: state.auth.token!=null
  }
}
const mapDisaptchToProps = dispatch =>
{
  return {
    onTryAutoSignUp: ()=>{ dispatch(actions.authCheckState())}
  }
}
export default withRouter(connect(mapStateToProps,mapDisaptchToProps)(App));
