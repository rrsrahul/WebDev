import React from 'react';
//import {withRouter} from 'react-router-dom'

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.Author}</div>
        </div>
    </article>
);

//export default withRouter(post);
export default post;

//use withRouter to make it Route aware and get the props of previous Routes
