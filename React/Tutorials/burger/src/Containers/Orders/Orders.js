import React,{Component } from 'react';
import Order from '../../Components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index'
import {connect} from 'react-redux'

//import Spinner from '../../Components/UI/Spinner/Spinner'


class Orders extends Component
{
    state = {
        orders:[],
        loading:false
    }
    componentDidMount()
    {
        this.props.onFetchOrders(this.props.token);

    }
    render()
    {
        console.log(this.props.orders)
        return (
            <div>
                {this.props.orders.map(order=>
                    {
                        
                        return <Order key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price}/>
                       
                        
                    })}

            </div>
        )
    }
}

const mapStateToProps = (state)=>
{
    return {
        orders: state.order.orders,
        loading:state.order.loading,
        token:state.auth.token
    }
}
const mapDispatchToProps = (dispatch)=>
{
    return {
        onFetchOrders: (token)=>{dispatch(actions.fetchOrders(token))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axios))

//Redux order implementation