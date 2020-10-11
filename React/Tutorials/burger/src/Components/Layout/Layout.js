import React from 'react';

const layout = (props)=>
{
    return (<React.Fragment>
    <div>ToolBar,SideDrawer,BackDrop</div>
        <main> {props.children}</main>
        </React.Fragment>
        );

}

export default layout