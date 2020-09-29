import React from 'react';

const validationComp = (props)=>
{
    let validation ="";
    if(props.length<4)
    {
        validation="Too Short"
    }
    else if(props.length>10)
    {
        validation="Too Long";
    }
 

    return (
        <div>
            {validation}
        </div>
    )
}

export default validationComp;