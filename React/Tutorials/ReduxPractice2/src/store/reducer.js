const initialState = {
    people:[]
}

const reducer = (state = initialState , action)=>
{
    console.log('Reducer')
    if(action.type ==='ADD')
    {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: action.name,
            age: action.age
        }
        return {
            people: state.people.concat(newPerson)
        }

    }

    if(action.type ==='REM')
    {
        return { people:state.people.filter(person => person.id!==action.id) }
    }
    return state;
}

export default reducer;