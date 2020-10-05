
import React,{Component} from 'react';

import Auxillary from '../../../hoc/Auxillary';
import classes from './Person.module.css';


class Person extends Component
{
    render()
    {
        return(
            <Auxillary>
                <div className={classes.Person}>
     
                    <p onClick={this.props.click}>
                        Hi my name is {this.props.name} and my age is {this.props.age} 
                    </p>
                    <input type='text' onChange={this.props.change} value={this.props.name}/>
                </div>

            </Auxillary>
            
        );
    }
}


/* Functional Variation
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
}*/

export default Person;