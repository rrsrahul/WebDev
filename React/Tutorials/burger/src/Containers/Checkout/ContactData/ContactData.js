import React,{Component} from 'react';

import Button from '../../../Components/UI/Button/Button';
import classes from './ContactData.module.css'

class ContactData extends Component
{

    state={
        name:'',
        email:'',
        address:{
            street:'',
            postalCode: ''
        }
    }

    render()
    {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name"/>
                <input className={classes.Input}  type="email" name="email" placeholder="Your Email"/>
                <input className={classes.Input}  type="text" name="street" placeholder="Your Street"/>
                <input className={classes.Input}  type="text" name="postalCode" placeholder="Your Postal Code"/>
                <Button btnType="Success">Order</Button>
            </div>
        )
    }

}

export default ContactData;