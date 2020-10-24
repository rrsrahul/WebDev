import React from 'react';
import classes from './ToolBar.module.css'
const toolbar= (props)=>
{
    return (
        <header className={classes.ToolBar}>
            <div>MENU</div>
            <div>Logo</div>
            <nav>Links</nav>
        </header>
    )
}

export default toolbar;