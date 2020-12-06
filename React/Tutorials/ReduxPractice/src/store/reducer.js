import * as actionTypes from './actions';

const initialState = {
    counter:0,
    results:[]
}

const reducer = (state=initialState,action)=>
{

    switch(action.type)
    {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter:state.counter+1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter:state.counter-1
            }
        case actionTypes.ADD:
            return   {
                ...state,
                counter:state.counter+action.value
            }
        case actionTypes.SUB:
            return   {
                ...state,
                counter:state.counter-action.value
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results:state.results.concat({id:new Date(),value:state.counter})
                //Don't use push because it manipulates the old array, concat returns a new array 
            }
        case actionTypes.DELETE_RESULT:
            //const newArray = [...state.results]
            //splice the newArray using the id 


            const updatedArray = state.results.filter((result) => result.id!== action.resultElid )
            return {
                ...state,
                results:updatedArray
            }
        default:
            console.log('default case')
            return state;
    }
    //Adding dispatchers to reducer
   
}

export default reducer;