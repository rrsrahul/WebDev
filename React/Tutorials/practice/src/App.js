import React, { Component } from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component
{

  state={
    persons:[
      {name:'Rahul',age:10},
      {name:'Rrs',age:12},
      {name:'Heisen',age:22}
    ]
  }
  switchNameHandler = ()=>
  {
      this.setState({
        persons:[
          {name:'Rahul',age:10},
          {name:'Rrs',age:12},
          {name:'Heisenberg',age:22}
        ]
      });
      //Setstate merges the arguement passed with the State, and does not discard other state values
  }

  render()
  {
    return (
      <div className="App">
         <h1>Functional React Programming</h1>
        <h1>Hi First React App</h1>
        <button onClick={this.switchNameHandler} >Switch</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
       
      </div>
    );


  }

}

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