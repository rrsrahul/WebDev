import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import {connect} from 'react-redux';

class Persons extends Component {
    state = {
        persons: []
    }


    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }

    render () {
        console.log(this.props.people)
        return (
            
            <div>
                <AddPerson personAdded={this.props.personAdded} />
                {this.props.people.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personRemoved(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        people:state.people
    }
}
const mapDispatchToProps = dispatch =>
{
    return {
        personAdded:()=>{ dispatch({type:'ADD'})},
        personRemoved:(id)=>{dispatch({type:'REM',id:id})}
    }
    //Comment

}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);