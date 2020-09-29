import React, { Component } from 'react';

import './App.css';
import CharComp from './CharComp/CharComp';
import ValidationComp from './ValidationComp/ValidationComp';

class App extends Component
{
  state={
    userInput:"",

  }

  userNameHandler = (event)=>
  {
    
    this.setState({userInput:event.target.value});
  }

  render()
  {
    let characters = this.state.userInput.split('');
    console.log(characters);
    return (
      <div className='App'>
        <input type="text" onChange = {this.userNameHandler}/>
        <p>
          {this.state.userInput}
          </p>
          <ValidationComp length={this.state.userInput.length}/>
        <div className='elements'>
        { characters.map(char=>
          {
              return (
                <div>
                   <CharComp  data ={char} />
                   
                
                </div>
              )
          })
        }

        </div>
         
      
      </div>
    )
  }

}

export default App;
