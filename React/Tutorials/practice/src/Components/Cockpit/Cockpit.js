import React,{ useEffect,useRef } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props)=>
{
    const toggleBtnref = useRef(null);
    //UseEffect is a combination of ComponentDidMount and ComponentDidUpdate
    useEffect(()=>
    {
        //AutoMatically Clicks the Button after the component is rendered
        
        toggleBtnref.current.click();
        console.log('Cockpit.js UseEffect');
    },[]);

    const assignedClasses =[];
    let btnClass = '';
    if(props.showPerson){
        btnClass = classes.Red;
    }

    if(props.persons<=2)
    {
        assignedClasses.push(classes.red);
    }
    if(props.persons<=1)
    {
        assignedClasses.push(classes.bold);

    }
    return (

        <div className={classes.Cockpit}>
            <h1>Functional React Programming</h1>
        <p className={assignedClasses.join(' ')}>Hi First React App</p>
        
        <button className={btnClass} onClick={props.toggle} ref ={toggleBtnref} >
          Switch
        </button>
           
             
        </div>
    );
}

export default React.memo(Cockpit);