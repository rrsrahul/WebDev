import React, { Component } from 'react';
import classes from './Layout.module.css'
import ToolBar from '../../Components/Navigation/ToolBar/ToolBar'
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';

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
            <div><ToolBar clicked={this.sideDrawerOpenHandler}/></div>
            <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
                <main className={classes.Content}> {this.props.children}</main>
                </React.Fragment>
                );
    }
    

}

export default Layout;