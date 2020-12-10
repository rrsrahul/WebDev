
import * as actionTypes from './actionTypes';

//Action Creators which gives us an actions
export const increment = ()=>
{
    return {
        type:actionTypes.INCREMENT
    }
}

export const decrement = ()=>
{
    return{
        type:actionTypes.DECREMENT
    }
}

export const add = ()=>
{
    return {
        type:actionTypes.ADD,
        value:5
    }
}

export const sub = ()=>
{
    return {
        type:actionTypes.SUB,
        value:5
    }
}