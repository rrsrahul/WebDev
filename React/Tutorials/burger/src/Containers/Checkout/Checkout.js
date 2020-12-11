import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component{


    checkoutCancelledHandler = ()=>
    {
        this.props.history.goBack();
    }

    checkoutSuccessHandler = ()=>
    {
        this.props.history.replace('/checkout/contact-data');
    }


    render()
    {
        let summary = <Redirect to ='/'/>
        if(this.props.ings)
        {
            summary = (<div>
            
                <CheckoutSummary ingredients={this.props.ings}
                checkoutCancelled={this.checkoutCancelledHandler}
                
                checkoutSuccess={this.checkoutSuccessHandler}/>
    
                <Route path={this.props.match.path + '/contact-data'} 
                component={ContactData}/>
            </div>)
        }
        return summary

    }
}

const mapStateToProps = (state)=>
{
    return {
        ings:state.burgerBuilder.ingredients
    }
}


export default connect(mapStateToProps)(Checkout);