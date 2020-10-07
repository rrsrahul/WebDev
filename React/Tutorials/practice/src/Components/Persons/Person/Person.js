
import React,{Component} from 'react';
import Proptypes from 'prop-types';
import classes from './Person.module.css';
import AuthContext from '../../../context/auth-context';


class Person extends Component
{
    constructor(props)
    {
        super(props);
        this.inputElement = React.createRef();
        //CreateRef creates a reference object, we can use this later in the program
    }
    componentDidMount()
    {
        //this.inputElement.focus;
        this.inputElement.current.focus();
    }
    render()
    {
        return(
            <React.Fragment>
                
                <div className={classes.Person}>
                
                <AuthContext.Consumer>
                    {(context)=>context.authenticated ? <p >Authenticated</p> : <p>Please Login</p>}
                </AuthContext.Consumer>
                    <p key="i1" onClick={this.props.click}>
                        Hi my name is {this.props.name} and my age is {this.props.age} 
                    </p>
                    <p key="i2">{this.props.children}</p>
                    <input key="i3"
                    //ref={(inputEl)=>{ this.inputElement = inputEl}} 
                    ref = {this.inputElement}
                    type='text' 
                    onChange={this.props.change} 
                    value={this.props.name}/>
                </div>
               
            </React.Fragment>
            
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

Person.propTpyes = {
    click:Proptypes.func,
    name:Proptypes.string,
    age:Proptypes.number,
    change: Proptypes.func
};
export default Person;