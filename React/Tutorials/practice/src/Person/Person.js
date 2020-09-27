import React from 'react';

const person = (props)=>
{
    return (
    <div>
        <h1>Functional React Programming</h1>
        <p>
            Hi my name is {props.name} and my age is {props.age} 
        </p>
        
        </div>
    
    );
}

export default person;