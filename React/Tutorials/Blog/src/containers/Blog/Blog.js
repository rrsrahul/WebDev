import React, { Component } from 'react';
//import axios from 'axios';
//import axios from '../../axios';
import {Route, NavLink,Switch} from 'react-router-dom';
import './Blog.css';

import Posts from '../Posts/Posts';
//import NewPost from '../NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(()=>
{
    return import('../NewPost/NewPost')
});

// we can also use const AsyncNewPost = React.lazy(()=> import('../'))
//Also import Suspense from react




class Blog extends Component {
    state = 
    {
        auth:true
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
                    {this.state.auth ? <Route  path='/new-post' component={AsyncNewPost}/>:null}
                    <Route  path='/posts'  component={Posts}/>
                    <Route render={()=><h1>Not Found</h1>}/>
                    {/*<Route  path='/'  component={Posts}/> Use Redirect instead of this*/}
                    {/*<Redirect from ='/' to='/posts'/> */} 
                    
                </Switch>
                
                
            </div>
        );
    }
}
//Switch is used to select only the first match in the Route list 
//Comditional 

export default Blog;