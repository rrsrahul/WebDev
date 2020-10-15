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
    {controls.map(bc=>
    {
        return (<BuildControl key={bc.label} label={bc.type}
            
        added={ ()=>{props.ingredientAdded(bc.type)}}/>)
    })
   }
    
    
    </div>
    )
}

export default buildControls;