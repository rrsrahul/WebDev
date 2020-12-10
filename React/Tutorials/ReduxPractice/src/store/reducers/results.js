import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results:[]
}

const reducer = (state=initialState,action)=>
{

    switch(action.type)
    {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results:state.results.concat({id:new Date(),value:action.value})
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