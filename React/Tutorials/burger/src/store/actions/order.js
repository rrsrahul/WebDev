import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';


//Synchronous
export const purchaseBurgerSuccess = (id,orderData)=>
{
    return{
        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId:id,
        orderData:orderData
    }
}

export const purchaseBurgerFailed = (err)=>
{
    return {
        type:actionTypes.PURCHASE_BURGER_FAILED,
        error:err
    }
}

export const purchaseBurgerStart = ()=>
{
    return {
        type:actionTypes.PURCHASE_BURGER_START
    }
}


//Async
export const  purchaseBurger = (orderData,token)=>
{
    return dispatch =>
    {
        dispatch(purchaseBurgerStart());

        axios.post('/orders.json?auth='+token,orderData)
        .then(response=>
            {
                console.log(response.data);
                dispatch(purchaseBurgerSuccess(response.data.name,orderData))
               
                
            })
        .catch(err=>
            {
                dispatch(purchaseBurgerFailed(err))
            })
    }
}

export const purchaseInit = ()=>
{
    return {
        type:actionTypes.PURCHASE_INIT
    }
}

//Orders action Creators

export const fetchOrdersSuccess = (orders)=>
{
    return {
        type:actionTypes.FETCH_ORDERS_SUCCESS,
        orders:orders
    }
}

export const fetchOrdersFailed = (err)=>
{
    return{
        type:actionTypes.FETCH_ORDERS_FAILED,
        err:err
    }
}

export const fetchOrdersStart = ()=>
{
    return {
        type:actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = (token)=>
{
   
    return dispatch =>
    {
        axios.get('/orders.json?auth='+token)
        .then(res =>
            {
                const fetchedOrders=[];
                for(let key in res.data)
                {
                    fetchedOrders.push(
                        {
                            ...res.data[key],
                            id:key
                        }
                    )
                }
                dispatch(fetchOrdersSuccess(fetchedOrders))
            })
            .catch(err=>
                {
                    dispatch(fetchOrdersFailed(err))
                })
}
}