import React from 'react';

import classes from './Person.module.css';



const person = (props)=>
{
    
    return (
     
    <div className={classes.Person}>
     
        <p onClick={props.click}>
            Hi my name is {props.name} and my age is {props.age} 
        </p>
        <input type='text' onChange={props.change} value={props.name}/>
   </div>
    
    );
}

export default person;