import React from 'react';

const WithClass = (props)=>
{
    return(

   
    <div className={props.classes}>{props.children}</div>

    );
}

/* Another method of using HigherOrderComponents, using a normal javaScript function

const withClass =(WrappedComponent, classname)=>
{
    return props=>
    {
        return (
            <div className = {classname}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
    
}

We can use this in App.js by 

export default withClass(App.js,classes.App)



*/
export default WithClass;