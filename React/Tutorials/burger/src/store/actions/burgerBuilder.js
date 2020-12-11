import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';
import string from '../../Endpoints';

export const addIngredient = (name)=>
{
    return {
        ingredientName:name,
        type:actionTypes.ADD_INGREDIENT
    }
}


export const removeIngredient = (name)=>
{
    return {
        ingredientName:name,
        type:actionTypes.REMOVE_INGREDIENT
    }
}

const setIngredients = (ingredients)=>
{
    return {
        type:actionTypes.SET_INGREDIENTS,
        ingredients:ingredients
    }
}

const fetchIngredientsFailed =()=>
{
    return {
        type:actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredients = ()=>
{
    return dispatch => 
    {
        axios.get(string+'Ingredients.json')
        .then(response =>
        {
            dispatch(setIngredients(response.data))
        })
        .catch(err=>
            {
                console.log(err);
                dispatch(fetchIngredientsFailed())
                
            })
    }
}