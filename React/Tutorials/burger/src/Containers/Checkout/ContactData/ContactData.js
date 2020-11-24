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
                    value:'Rahul'
                },

                adress:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Street'
                    },
                    value:'Bangalore'
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
                    value:'Rahul'
                }

        },
        loading:false
    }

    orderHandler = (event)=>
    {
        event.preventDefault();
        this.setState({loading:true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer:{
                name:'Rahul',
                adress:'Bangalore',
                email:'rahulrsgoku'
            },
            delivery:'fastest'
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
    render()
    {
        let form =(<form>
                <Input elementType='...' elementConfig='...' value='...'/>
            <Input   inputtype="input"  type="email" name="email" placeholder="Your Email"/>
            <Input   inputtype="input" type="text" name="street" placeholder="Your Street"/>
            <Input  inputtype="input" type="text" name="postalCode" placeholder="Your Postal Code"/>
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