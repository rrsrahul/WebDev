import React,{Component} from 'react';
import {connect} from 'react-redux';

import axios from '../../../axios-orders';
import Button from '../../../Components/UI/Button/Button';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import classes from './ContactData.module.css'
import Input from '../../../Components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

import * as orderActions from '../../../store/actions/index'


class ContactData extends Component
{

    state={
        orderForm:{
                name:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Your Name'
                    },
                    value:'',
                    validation:
                    {
                        required:true
                    },
                    valid:false,
                    touched:false
                },

                address:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Street'
                    },
                    value:'',
                    validation:
                    {
                        required:true
                    },
                    valid:false,
                    touched:false
                },
                email:{
                    elementType:'input',
                    elementConfig:{
                        type:'email',
                        placeholder:'Your email'
                    },
                    value:'',
                    validation:
                    {
                        required:true
                    },
                    valid:false,
                    touched:false
                },
                zipcode:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'ZipCode'
                    },
                    value:'',
                    validation:
                    {
                        required:true,
                        minLength:5,
                        maxLength:5
                    },
                    valid:false,
                    touched:false
                },
                country:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Country'
                    },
                    value:'',
                    validation:
                    {
                        required:true
                    },
                    valid:false,
                    touched:false
                },
                deliveryMethod:{
                    elementType:'select',
                    elementConfig:{
                        options:[
                            {value:'fastest',displayValue:'Fastest'},
                            {value:'cheapest',displayValue:'Cheapest'}
                        ]
                    },
                    value:'Fastest',
                    valid:true
                    
                }

        },
        formIsValid:false,
        loading:false
    }


    //Handling Orders
    orderHandler = (event)=>
    {
        console.log('BurgerOrdered')
        event.preventDefault();
        const formData ={};

        for(let formElement in this.state.orderForm)
        {
            formData[formElement] = this.state.orderForm[formElement].value;
        }

        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData
        }
        this.props.onOrderBurger(order,this.props.history)
        //console.log(this.props.ingredients)
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
      
        return isValid
    }

    //OnChange Listener
    inputChangedHandler = (event,inputIdentifier)=>
    {
        //console.log(event.target.value)
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        //Deep Cloning the Objects inside updatedOrderForm
        const updatedFormElement = { ...updatedOrderForm[inputIdentifier] }
        updatedFormElement.value = event.target.value;

        //Checking Validaition 
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value,updatedFormElement.validation)
        updatedFormElement.touched=true;

        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;

        for(let inputIdentifiers in updatedOrderForm)
        {
            formIsValid = updatedOrderForm[inputIdentifiers].valid && formIsValid;
        }

        this.setState({orderForm:updatedOrderForm,formIsValid:formIsValid})
    }



    render()
    {
        const formElementsArray = [];

        for(let key in this.state.orderForm)
        {
            formElementsArray.push({
                id:key,
                config:this.state.orderForm[key]
            })

        }

        let form =(<form onSubmit={this.orderHandler}>
                
                {formElementsArray.map(formElement =>
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
                            changed={ (event)=> { this.inputChangedHandler(event,formElement.id) } }/>

                        )
                    })}
                <Button btnType="Success"  
                disabled={!this.state.formIsValid} 
                clicked={this.orderHandler}>    Order   </Button>
        </form> );
        if(this.props.loading)
        {
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form }  
            </div>  
        )
    }

}

const mapStateToProps = (state)=>
{
    return {
        ings:state.burgerBuilder.ingredients,
        price:state.burgerBuilder.price,
        loading:state.order.loading
    }
}

const mapDisaptchToProps = dispatch =>
{
    return {
        onOrderBurger: (orderData,route)=>{dispatch(orderActions.purchaseBurger(orderData,route))}
    }
}

export default connect(mapStateToProps,mapDisaptchToProps)(withErrorHandler(ContactData,axios));