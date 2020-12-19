import React, { Component } from 'react';
import classes from './Layout.module.css'
import ToolBar from '../../Components/Navigation/ToolBar/ToolBar'
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';

class Layout extends Component{

    state={
        showSideDrawer: false
    }
    sideDrawerClosedHandler = ()=>
    {
        this.setState({showSideDrawer:false});
    }
    sideDrawerOpenHandler = ()=>
    {
        this.setState({showSideDrawer:true});
    }
    render()
    {
        return (<React.Fragment>
            <div><ToolBar 
            isAuth={this.props.isAuthenticated}
            clicked={this.sideDrawerOpenHandler}/></div>
            <SideDrawer 
            isAuth={this.props.isAuthenticated}
            closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
                <main className={classes.Content}> {this.props.children}</main>
                </React.Fragment>
                );
    }
    

}

const mapStateToProps = state =>
{
    return {
        isAuthenticated: state.auth.token!==null
    }
}

export default connect(mapStateToProps)(Layout);