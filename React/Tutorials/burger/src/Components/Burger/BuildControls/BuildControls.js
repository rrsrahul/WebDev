import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [{label:'Salad', type:'salad'},
                {label:'Bacon', type:'bacon'},
                {label:'Cheese', type:'cheese'},
                {label:'Meat', type:'meat'}];


const buildControls = (props)=>
{
    return (
    <div className={classes.BuildControls}> 
     <p>Current Price : <strong>{props.price}</strong></p>
    {controls.map(bc=>
    {
        return (<BuildControl key={bc.label} label={bc.type}
            
        added={ ()=>{props.ingredientAdded(bc.type)}}
        removed={()=>{props.ingredientRemoved(bc.type)}}
        disabled ={props.disabled[bc.type]}
        />)
    })
   }
    
    <button 
    className={classes.OrderButton}
    disabled={!props.canPurchase}
    onClick = {props.onOrder}>
        {props.isAuth? 'Order Now': 'Sign In'}</button>
    </div>
    )
}

export default buildControls;