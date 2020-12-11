import * as actionTypes from './actionTypes';

export const saveResult = (result)=>
{
    return {
        type:actionTypes.STORE_RESULT,
        value:result

    }
}

export const storeResult = (res)=>
{
    //redux thunk adds gives us both dispatch and getState
    return (dispatch,getState)=>
    {
        console.log(getState().ctr.counter);
    setTimeout(()=>
    {
        
        dispatch(saveResult(res))
    }, 2000)
}
    
}

export const deleteResult = (id)=>
{
    return {
        type:actionTypes.DELETE_RESULT,
        resultElid:id
    }
}