import React from 'react';
import classes from './Layout.module.css'
const layout = (props)=>
{
    return (<React.Fragment>
    <div>ToolBar,SideDrawer,BackDrop</div>
        <main className={classes.Content}> {props.children}</main>
        </React.Fragment>
        );

}

export default layout