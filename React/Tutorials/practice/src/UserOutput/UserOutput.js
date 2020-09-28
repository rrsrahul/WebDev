import React from 'react';
import './UserOutput.css';

const userOutput = (props)=>
{
    return (
        <div className='para'>
        
            <p>
                Hello welcome to first Paragraph
                <br/>
                My name is {props.username}
            </p>

            <p>
                Hello welcome to Second Paragraph
                <br/>
                This is some text that we can see
            </p>
        </div>
    )
}

export default userOutput;