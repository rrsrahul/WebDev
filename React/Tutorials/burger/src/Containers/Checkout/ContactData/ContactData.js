import React,{Component} from 'react';
import axios from '../../../axios-orders';
import Button from '../../../Components/UI/Button/Button';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import classes from './ContactData.module.css'

class ContactData extends Component
{

    state={
        name:'',
        email:'',
        address:{
            street:'',
            postalCode: ''
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
                <input className={classes.Input} type="text" name="name" placeholder="Your Name"/>
            <input className={classes.Input}  type="email" name="email" placeholder="Your Email"/>
            <input className={classes.Input}  type="text" name="street" placeholder="Your Street"/>
            <input className={classes.Input}  type="text" name="postalCode" placeholder="Your Postal Code"/>
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