import React,{Component} from 'react';
import axios from '../../../axios-orders';
import Button from '../../../Components/UI/Button/Button';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import classes from './ContactData.module.css'
import Input from '../../../Components/UI/Input/Input';


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
                    value:''
                },

                address:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Street'
                    },
                    value:''
                },
                email:{
                    elementType:'input',
                    elementConfig:{
                        type:'email',
                        placeholder:'Your email'
                    },
                    value:''
                },
                zipcode:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'ZipCode'
                    },
                    value:''
                },
                country:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Country'
                    },
                    value:''
                },
                deliveryMethod:{
                    elementType:'select',
                    elementConfig:{
                        options:[
                            {value:'fastest',displayValue:'Fastest'},
                            {value:'cheapest',displayValue:'Cheapest'}
                        ]
                    },
                    value:'Fastest'
                }

        },
        loading:false
    }


    //Handling Orders
    orderHandler = (event)=>
    {
        event.preventDefault();
        const formData ={};

        for(let formElement in this.state.orderForm)
        {
            formData[formElement] = this.state.orderForm[formElement].value;
        }
        this.setState({loading:true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        }


        axios.post('/orders.json',order)
        .then(response=>
            {
                //console.log(response);
                this.setState({loading:false,purchasing:false});
                this.props.history.push('/')
            })
        .catch(err=>
            {
                console.log(err);
                this.setState({loading:false,purchasing:false});
            })
        //console.log(this.props.ingredients)
    }

    //OnChange Listener
    inputChangedHandler = (event,inputIdentifier)=>
    {
        console.log(event.target.value)
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        //Deep Cloning the Objects inside updatedOrderForm
        const updatedFormElement = { ...updatedOrderForm[inputIdentifier] }
        updatedFormElement.value = event.target.value;

        updatedOrderForm[inputIdentifier] = updatedFormElement;

        this.setState({orderForm:updatedOrderForm})
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
                            changed={ (event)=> { this.inputChangedHandler(event,formElement.id) } }/>

                        )
                    })}
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
        </form> );
        if(this.state.loading)
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

export default ContactData;