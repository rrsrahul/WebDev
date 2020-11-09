import React, { Component } from 'react';
//import axios from 'axios';
//import axios from '../../axios';
import {Route, NavLink} from 'react-router-dom';

import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';

import './Blog.css';

class Blog extends Component {
    render () {
    
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                {// to change activeclassNames use this prop activeClassName="my_active"}}
                                /* use active style to set up in line styling*/}
                                <NavLink 
                                activeStyle ={{textDecoration:'underline'}}
                                to="/" exact>Home</NavLink>
                            </li>
                            <li><NavLink to={{
                                pathname:'/new-post',
                                hash: '#submit',
                               
                            }}>New Post</NavLink>
                            </li>
                       
                        </ul>
                    </nav>
                </header>
                <Route  path='/' exact component={Posts}/>
                <Route  path='/new-post' component={NewPost}/>   
            </div>
        );
    }
}

export default Blog;