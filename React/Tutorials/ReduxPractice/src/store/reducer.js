const initialState = {
    counter:0
}

const reducer = (state=initialState,action)=>
{

    switch(action.type)
    {
        case 'INCREMENT':
            return {
                ...state,
                counter:state.counter+1
            }
        case 'DECREMENT':
            return {
                counter:state.counter-1
            }
        case 'ADD':
            return   {
                counter:state.counter+action.value
            }
        case 'SUB':
            return   {
                counter:state.counter-action.value
            }
        default:
            console.log('default case')
    }
    //Adding dispatchers to reducer
    return state;
}

export default reducer;