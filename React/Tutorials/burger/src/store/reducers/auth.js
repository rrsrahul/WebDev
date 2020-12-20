import * as actionTypes from '../actions/actionTypes';


const initialState = {
    token:null,
    userId:null,
    error:null,
    loading:false,
    authRedirectPath:'/'
}

const authLogout = (state,action)=>
{
    return {
        ...state,
        token:null,
        userId:null
    }
}

const authRedirectPath = (state,action)=>
{
    return {
        ...state,
        authRedirectPath: action.path
    }
}

const reducer = (state=initialState,action)=>
{

    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                error:null,
                loading:true
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token:action.idToken,
                userId:action.userId,
                error:null,
                loading:false
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                error:action.err,
                loading:false
            }
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state,action);

        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return authRedirectPath(state,action);
        default:
            return state;
        
}
}

export default reducer;