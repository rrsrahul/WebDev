import React from 'react'
import classes from './Input.module.css'


//Different Types of Input setting up using switch case for the custom Input component
const input = (props)=>
{
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if(props.invalid === true && props.shouldValidate && props.touched)
    {
        inputClasses.push(classes.Invalid);
    }

    switch(props.elementType)
    {
        case('input'):
            inputElement=<input className={inputClasses.join(' ')} 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}/>
            break;
        case('textarea'):
            inputElement=<textarea 
            className={classes.InputElement} 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}/>
            break;
        case('select'):
            inputElement=(<select className={classes.InputElement} value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(op =>
                    {
                        return(
                        <option key={op.value} value={op.value}>{op.displayValue}</option>
                        )

                    })}
            </select>)
            break;
        default:
            inputElement=<input 
            className={classes.InputElement} 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}/>

    }
    return (   
        <div className={classes.Input} >
            <label className={classes.label}>{props.label}</label>
            {inputElement}
            
        </div>
    )
}

export default input;