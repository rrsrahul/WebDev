import * as actionTypes from './actionTypes';
import axios from 'axios';
import {FIREBASE_API_KEY} from '../../Endpoints';

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
        const authData = {
            email:email,
            password:password,
            returnSecureToken:true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+FIREBASE_API_KEY,authData)
        .then(res=>{
            console.log(res)
            dispatch(authSuccess(res.data));
        })
        .catch(err=>
        {
            console.log(err);
           dispatch(authFailed(err));
        })
    }

}