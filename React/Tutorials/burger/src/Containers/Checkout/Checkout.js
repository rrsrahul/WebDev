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
        
        console.log(this.props.purchased);
        
        if(this.props.ings)
        {
           const purchaseRedirect = this.props.purchased ? <Redirect to ='/'/>:null
           console.log(purchaseRedirect,'PurchaseRedirected');
            summary = (<div>
                {purchaseRedirect}
                
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
        ings:state.burgerBuilder.ingredients,
        purchased:state.order.purchased
    }
}



export default connect(mapStateToProps)(Checkout);