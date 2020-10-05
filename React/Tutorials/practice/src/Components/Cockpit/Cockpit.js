import React,{ useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props)=>
{

    useEffect(()=>
    {
        console.log('Cockpit.js UseEffect');
    });

    const assignedClasses =[];
    let btnClass = '';
    if(props.showPerson){
        btnClass = classes.Red;
    }

    if(props.persons.length<=2)
    {
        assignedClasses.push(classes.red);
    }
    if(props.persons.length<=1)
    {
        assignedClasses.push(classes.bold);

    }
    return (

        <div className={classes.Cockpit}>
            <h1>Functional React Programming</h1>
        <p className={assignedClasses.join(' ')}>Hi First React App</p>
        
        <button className={btnClass} onClick={props.toggle} >
          Switch
        </button>
           
             
        </div>
    );
}

export default Cockpit;