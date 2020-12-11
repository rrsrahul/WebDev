import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';


//Synchronous
export const purchaseBurgerSuccess = (id,orderData)=>
{
    return{
        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        id:id,
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


//Async
export const  purchaseBurgerStart = (orderData)=>
{
    return dispatch =>
    {
        axios.post('/orders.json',orderData)
        .then(response=>
            {
                console.log(response.data);
                dispatch(purchaseBurgerSuccess(response.data,orderData))
                
            })
        .catch(err=>
            {
                dispatch(purchaseBurgerFailed(err))
            })
    }
}