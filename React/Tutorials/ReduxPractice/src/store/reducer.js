const initialState = {
    counter:0
}

const reducer = (state=initialState,action)=>
{
    if(action.type==='INCREMENT')
    {
        return {
            ...state,
            counter:state.counter+1
        }
    }

    if(action.type==='DECREMENT')
    {
        return {
            counter:state.counter-1
        }
    }

    if(action.type==='ADD')
    {
        return   {
            counter:state.counter+action.value
        }
    }
    if(action.type==='SUB')
    {
        return   {
            counter:state.counter-action.value
        }
    }
    //Adding dispatchers to reducer
    return state;
}

export default reducer;