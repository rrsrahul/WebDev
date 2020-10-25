import React from 'react';
import classes from './Layout.module.css'
import ToolBar from '../../Components/Navigation/ToolBar/ToolBar'
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
const layout = (props)=>
{
    return (<React.Fragment>
    <div><ToolBar/></div>
    <SideDrawer/>
        <main className={classes.Content}> {props.children}</main>
        </React.Fragment>
        );

}

export default layout