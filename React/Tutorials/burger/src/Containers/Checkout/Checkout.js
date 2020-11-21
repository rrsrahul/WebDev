import React,{Component} from 'react'

import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component{

    state={
        ingredients:{
            salad:1,
            meat:1,
            bacon:1,
            cheese:1
        }
    }

    componentDidMount()
    {
        const query = new URLSearchParams(this.props.location.search);
        //console.log(query);
        const ingredients = {};
        for(let param of query.entries())
        {
            //[salad,'1']
            console.log(param);
            ingredients[param[0]] = +param[1]
        }

        this.setState({ingredients:ingredients});
    }

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
        return <div>
            <CheckoutSummary ingredients={this.state.ingredients}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutSuccess={this.checkoutSuccessHandler}/>
        </div>
    }
}

export default Checkout;