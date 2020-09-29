import React, { Component } from 'react';

import './App.css';
import CharComp from './CharComp/CharComp';
import ValidationComp from './ValidationComp/ValidationComp';

class App extends Component
{
  state={
    userInput:"",
    userInputChars:[]

  }

  userNameHandler = (event)=>
  {
    const chars = event.target.value.split();
    this.setState({userInput:event.target.value,userInputChars:chars});
  }

  render()
  {
    return (
      <div>
        <input type="text" onChange = {this.userNameHandler}/>
        <p>
          {this.state.userInput}
          <ValidationComp length={this.state.userInput.length}/>
          <CharComp data ="2"/>
        </p>
      </div>
    )
  }

}

export default App;
