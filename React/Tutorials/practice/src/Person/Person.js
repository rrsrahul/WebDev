import React from 'react';

//import './Person.css';

import styled from 'styled-components';

const StyledDiv = styled.div `
      
width: 60%;
margin:16px auto;
border: 1px solid #eeeeee;
border-radius: 25px;
box-shadow: 0px 2px 3px #cccccc;
padding: 16px;
background-color: rgb(240, 232, 232);
text-align: center;


@media (min-width: 500px)
{
  
      width:450px
  
  
}` ;

const person = (props)=>
{
    
    return (
    //<div className='Person'>
      <StyledDiv>
        <p onClick={props.click}>
            Hi my name is {props.name} and my age is {props.age} 
        </p>
        <input type='text' onChange={props.change} value={props.name}/>
    </StyledDiv>
    
    );
}

export default person;