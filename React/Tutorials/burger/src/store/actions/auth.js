import * as actionTypes from './actionTypes';
import axios from 'axios';
import {FIREBASE_API_KEY} from '../../Endpoints';

export const authStart = ()=>
{
    return {
        type:actionTypes.AUTH_START
    }
}

export const authSuccess = (token,userId)=>
{
    return {
        type:actionTypes.AUTH_SUCCESS,
        idToken:token,
        userId:userId
    }
}

export const authFailed = (err)=>
{
    return{
        type:actionTypes.AUTH_FAILED,
        err:err
    }
}

//Redux Thunk to export async code

export const auth = (email,password,isSignUp)=>
{
    return dispatch =>
    {
        dispatch(authStart());
        const authData = {
            email:email,
            password:password,
            returnSecureToken:true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+FIREBASE_API_KEY;
        if(!isSignUp)
        {
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+FIREBASE_API_KEY;
        }
        axios.post(url,authData)
        .then(res=>{
            console.log(res)
            dispatch(authSuccess(res.data.idToken,res.data.localId));
        })
        .catch(err=>
        {
           console.log(err.response);
           dispatch(authFailed(err.response.data.error));
        })
    }

}