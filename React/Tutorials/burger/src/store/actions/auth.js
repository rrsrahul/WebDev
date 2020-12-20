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

export const logOut = ()=>
{
    return{
        type:actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime)=>
{
    return dispatch =>
    {
        setTimeout(()=>{

            dispatch(logOut());

        },expirationTime*1000)

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
            dispatch(checkAuthTimeout(res.data.expiresIn))
        })
        .catch(err=>
        {
           console.log(err.response);
           dispatch(authFailed(err.response.data.error));
        })
    }

}

export const setAuthRedirectPath = (path)=>
{
    return {
        type:actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path 
    }
}