import React, { Component } from 'react';
//import axios from 'axios';
//import axios from '../../axios';
import {Route, NavLink,Switch,Redirect} from 'react-router-dom';

import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';


import './Blog.css';


class Blog extends Component {
    state = 
    {
        auth:false
    }
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
                                to="/posts" exact>Posts</NavLink>
                            </li>
                            <li><NavLink to={{
                                pathname:'/new-post',
                                hash: '#submit',
                               
                            }}>New Post</NavLink>
                            </li>
                       
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route  path='/new-post' component={NewPost}/>:null}
                    <Route  path='/posts'  component={Posts}/>
                    {/*<Route  path='/'  component={Posts}/> Use Redirect instead of this*/}
                     <Redirect from ='/' to='/posts'/>
                    
                </Switch>
                
                
            </div>
        );
    }
}
//Switch is used to select only the first match in the Route list 
//Comditional 

export default Blog;