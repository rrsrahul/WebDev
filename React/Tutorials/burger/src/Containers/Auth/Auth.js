import React,{Component } from 'react';

import classes from './Auth.module.css';
import {connect} from 'react-redux';

import {Redirect} from 'react-router-dom'

import * as actions from '../../store/actions/index';
import Input from '../../Components/UI/Input/Input';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Button from '../../Components/UI/Button/Button';

class Auth extends Component
{
    state={
        controls:{
                email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Email Address'
                },
                value:'',
                validation:
                {
                    required:true,
                    isEmail:true
                },
                valid:false,
                touched:false
            },
            password:{
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'Password'
                },
                value:'',
                validation:
                {
                    required:true,
                    minLength:7
                },
                valid:false,
                touched:false
            }
        },
        isSignUp: true
    }

    componentDidMount()
    {
        if(!this.props.buildingBurger && this.props.authRedirectPath!=='/')
        {
            this.props.onSetAuthRedirectPath();
        }

    }

    checkValidity(value,rules)
    {
        if(!rules)
        {
            return true;
        }
        let isValid = true;
        
            if(rules.required)
            {
                isValid = value.trim() !=='' && isValid;
            }
            if(rules.minLength)
            {
                isValid = value.length>= rules.minLength && isValid;
            }
            if(rules.maxLength)
            {
                isValid = value.length<=rules.maxLength && isValid;
            }
            if(rules.isEmail)
            {
                const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                isValid = pattern.test(value) && isValid;
            }
      
        return isValid
    }

    inputChangedHandler = (event,controlName) =>
    {
        const updatedControls = {
            ...this.state.controls,
            [controlName]:{
                ...this.state.controls[controlName],
                value:event.target.value,
                valid: this.checkValidity(event.target.value,this.state.controls[controlName].validation),
                touched:true
            }
        }

        this.setState({
            controls:updatedControls
        })
    }

    submitHandler = (event)=>
    {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value,this.state.isSignUp)
    }

    switchAuthModeHandler = ()=>
    {
        this.setState(prevState =>
            {
                return {isSignUp:!prevState.isSignUp}
            })
    }

    render()
    {

        const formElementsArray = [];

        for(let key in this.state.controls)
        {
            formElementsArray.push({
                id:key,
                config:this.state.controls[key]
            })

        }

        let form = formElementsArray.map(formElement =>
            {
                return (
                    <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig} 
                    value={formElement.config.value}
                    invalid = {!formElement.config.valid}
                    shouldValidate = {formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={ (event)=> { this.inputChangedHandler(event,formElement.id) } }
                     />
                     
                )
            })
        if(this.props.loading)
        {
            form=<Spinner/>
        }

        let errorMessage = null;

        if(this.props.error)
        {
            errorMessage = (<p>{this.props.error.message}</p>)
        }

        let authRedirect = null;
        if(this.props.isAuthenticated)
        {
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }
        return (
            <div className={classes.Auth}>
                {authRedirect}
                {errorMessage}
                <form onSubmit={(event)=>{this.submitHandler(event)}}>
                {form}
                <Button btnType='Success'> Submit</Button>
                </form>
                <Button btnType='Danger' clicked={this.switchAuthModeHandler}> 
                Switch To {this.state.isSignUp?'SIGN IN':'SIGN UP'}
                </Button>
            </div>
        )
    }
}

const mapStateToProps = state =>
{
    return {
        loading:state.auth.loading,
        error:state.auth.error,
        isAuthenticated: state.auth.token!=null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = dispatch =>
{
    return {
        onAuth: (email,password)=>{dispatch(actions.auth(email,password))},
        onSetAuthRedirectPath: ()=>{dispatch(actions.auth('/'))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Auth);