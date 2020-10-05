import React,{Component} from 'react';
import Person from './Person/Person';



class Persons extends Component
{

 /* static getDerivedStateFromProps(props,state)
  {
    console.log('[Persons.js] GetDerivedSateFromPropts')
    return state;
  }*/

  shouldComponentUpdate(nextProps,nextState)
  {
    console.log('[Persons.js] ShouldComponentUpdate');
    if(nextProps.persons!== this.props.persons)
    {
      return true;
    }
    return false;
  }

  getSnapshotBeforeUpdate(prevProps,prevState)
  {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message:' SentFrom GetSnapshorBeforeUpdate'};
  }

  componentDidUpdate(prevProps,prevState,snapshot)
  {
    console.log('[Persons.js] Component did Update')
    console.log(snapshot);
   
  }
  render()
  {
    console.log('Persons rendering.....')
    return (
      this.props.persons.map((person,index)=>
      {
       
        return (
         
          <Person 
          click={()=>{this.props.clicked(index)}}
          name = {person.name} 
          age ={person.age}
          key = {person.id}
          change = {(event=>{ this.props.changed(event,person.id) })}/>
        
        )
      })
  );


  }
  
}

/* Functional Approach
const persons = (props )=>
{
  console.log('Persons rendering..');
        return (
            props.persons.map((person,index)=>
            {
             
              return (
               
                <Person 
                click={()=>{props.clicked(index)}}
                name = {person.name} 
                age ={person.age}
                key = {person.id}
                change = {(event=>{ props.changed(event,person.id) })}/>
              
              )
            })
        );
}
*/

export default Persons;