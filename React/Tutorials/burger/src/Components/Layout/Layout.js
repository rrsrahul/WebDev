import React from 'react';
import classes from './Layout.module.css'
import ToolBar from '../../Components/Navigation/ToolBar/ToolBar'
const layout = (props)=>
{
    return (<React.Fragment>
    <div><ToolBar/></div>
        <main className={classes.Content}> {props.children}</main>
        </React.Fragment>
        );

}

export default layout