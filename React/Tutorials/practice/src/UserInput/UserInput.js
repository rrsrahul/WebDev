import React from 'react';

const userInput = (props)=>
{
    const style = {
        justifyContent: 'center',
    alignItems: 'center',
    margin:'auto'
    }
    return (
        <div style={style}>
            <p> Enter UserName</p>
            <input type = "text" onChange={props.change} value={props.username}/>
        </div>
        
    )
}

export default userInput;