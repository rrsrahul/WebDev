import React, { Component } from 'react';
import './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';
let c=0;

/*

SetState also takes a function, and returns the new state as the return value
This type of setState is used when the new value of the state depends on the old value of the state

for example setState((prevState,props)=>
{
return
{ //new State }
}

*/
class App extends Component
{
    //LifeCycle Hooks
    constructor(props)
    {
      super(props);
      this.state={
        persons:[
          { id: '1',name:'Rahul',age:10},
          {id: '2',name:'Rrs',age:12},
          {id: '3',name:'Heisen',age:22}
        ],
        showPersons:false,
        authenticated:false
      }
      c++;
      console.log('App.js constructor',c);
      //Can also intialise state in the constructor
    }



    //LifeCycle Hooks

    static getDerivedStateFromProps(props,state)
    {
      console.log('App.js GetDerivedStateFromprops',props);
        return state;
    }

    componentDidMount()
    {
      console.log('App.js ComponentDidMount');
    }

    shouldComponentUpdate(nextProps,nextState)
    {
      console.log('App.js shouldComponentUpdate');
      return true;
    }
    componentDidUpdate()
    {
      console.log('[App.js] Component DidUpdate')
    }

    componentWillUnmount()
    {
      console.log('[App.js] ComponentWillUnmount');
    }
  

    loginHandler = ()=>
    {
      this.setState({authenticated:true})
    }
  deletePersonHandler = (personIndex)=>
  {
    //const persons = this.state.persons.slice();
    //slice without arguments copies the array to another variable 
    //or ES6 spread operator just copies the array
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState( {persons: persons} );

  }
  nameChangedHandler = (event,id)=>
  {

    const personIndex = this.state.persons.findIndex((p)=>{
      return (p.id===id);
    })
    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons:persons
    });
  }
  togglePersonsHandler = ()=>
  {
      let doesShow = this.state.showPersons;
      this.setState({showPersons:!doesShow});
  }
  render()
  {
     console.log('App.js Render');
    let persons = null;
    if(this.state.showPersons)
    {
      persons= (
       <Persons changed = {this.nameChangedHandler} 
        clicked={this.deletePersonHandler}
        persons ={this.state.persons}
        isAuthenticated ={this.state.authenticated}/>
      
      );
    }

    //Dynamically Changing CSS styles
    return (
      <AuthContext.Provider 
      value ={{authenticated:this.state.authenticated,
      login: this.loginHandler}}>
      <div className="App">
        <Cockpit showPersons ={this.state.showPersons}
          persons={this.state.persons.length} 
          toggle={this.togglePersonsHandler} 
          login ={this.loginHandler}/>
          {persons}
      </div>
      </AuthContext.Provider>
    );


  }

}


/*

class App extends Component
{

  state={
    userName:'None'
  }
 onNameChange  = (event)=>
  {
    this.setState(
      {
        userName:event.target.value
      }
    )
  }


  render()
  { 
   return ( <div className='App'>
          <UserInput change={this.onNameChange.bind(this)} username={this.state.userName}/>
        <UserOutput username={this.state.userName}/>
    </div>
   )
  }
}
*/
/*
React Hooks Syntax 
const App = props =>
{
 const [personsState,setPersonState] = useState({
    persons:[
      {name:'Rahul',age:10},
      {name:'Rrs',age:12},
      {name:'Heisen',age:22}
    ]
  });

  //does not merge the state, it replaces the old state data with the new state data
  const switchNameHandler = ()=>
  {
      setPersonState({
        persons:[
          {name:'Rahul',age:10},
          {name:'Rrs',age:12},
          {name:'Heisenberg',age:22}
        ]
      });
      //Setstate merges the arguement passed with the State, and does not discard other state values
  }

    return (
      <div className="App">
         <h1>Functional React Programming</h1>
        <h1>Hi First React App</h1>
        <button onClick={switchNameHandler} >Switch</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
       
      </div>
    );


  
}
*/

/*function App() {
  


  return (
    <div className="App">
       <h1>Functional React Programming</h1>
      <h1>Hi First React App</h1>
      <Person name="Rahul" age="10"/>
      <Person name="R2" age="13"/>
      <Person name="Ra" age="11"/>
    </div>
  );
}*/

export default App;