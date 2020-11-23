import React from 'react';
import classes from './Order.module.css'

const order = (props)=>
{
    return (
    <div className={classes.Order}>
        <p>Ingredients 1</p>
        <p>Price: <strong> Rs 10</strong></p>
    </div>)
}

export default order;