import * as actionTypes from './actionTypes';

export const authStart = ()=>
{
    return {
        type:actionTypes.AUTH_START
    }
}

export const authSuccess = (data)=>
{
    return {
        type:actionTypes.AUTH_SUCCESS,
        authData:data
    }
}

export const authFailed = (err)=>
{
    return{
        type:actionTypes.AUTH_FAILED
    }
}

//Redux Thunk to export async code

export const auth = (email,password)=>
{
    return dispatch =>
    {
        dispatch(authStart());
    }

}