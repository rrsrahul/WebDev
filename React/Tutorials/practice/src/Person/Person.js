import React from 'react';

const person = (props)=>
{
    return (
    <div>
       
        <p onClick={props.click}>
            Hi my name is {props.name} and my age is {props.age} 
        </p>
        <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    
    );
}

export default person;