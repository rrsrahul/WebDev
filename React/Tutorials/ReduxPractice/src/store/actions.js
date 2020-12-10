export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUB = 'SUB';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';


//Action Creators which gives us an actions
export const increment = ()=>
{
    return {
        type:INCREMENT
    }
}

export const decrement = ()=>
{
    return{
        type:DECREMENT
    }
}

export const add = ()=>
{
    return {
        type:ADD,
        value:5
    }
}

export const sub = ()=>
{
    return {
        type:SUB,
        value:5
    }
}

export const saveResult = (result)=>
{
    return {
        type:STORE_RESULT,
        value:result

    }
}

export const storeResult = (res)=>
{
    return (dispatch)=>
    {
    setTimeout(()=>
    {
        dispatch(saveResult(res))
    }, 2000)
}
    
}

export const deleteResult = (id)=>
{
    return {
        type:DELETE_RESULT,
        resultElid:id
    }
}