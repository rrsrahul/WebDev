import React from 'react';

const charComp = (props)=>
{
    const boxStyle =
    {
      display:'inline-block',
      padding:'16px',
      textAlign:'center',
      border:'1px solid black'
    };
   return (
        <div style={boxStyle}>
        {props.data}
            </div>
   );
}

export default charComp;