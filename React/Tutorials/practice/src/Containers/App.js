import React, { Component } from 'react';
import './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component
{

  state={
    persons:[
      { id: '1',name:'Rahul',age:10},
      {id: '2',name:'Rrs',age:12},
      {id: '3',name:'Heisen',age:22}
    ],
    showPersons:false
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
     
    let persons = null;
    if(this.state.showPersons)
    {
      persons= (
       <Persons changed = {this.nameChangedHandler} 
        clicked={this.deletePersonHandler}
        persons ={this.state.persons}/>
      
      );
    }

    //Dynamically Changing CSS styles
    return (
      <div className="App">
        <Cockpit showPersons ={this.state.showPersons}
          persons={this.state.persons} 
          toggle={this.togglePersonsHandler} />
          {persons}
      </div>
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