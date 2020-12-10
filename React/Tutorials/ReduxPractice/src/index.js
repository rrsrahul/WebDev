import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers , applyMiddleware} from 'redux'

import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/results'

const rootReducer = combineReducers({
    ctr:counterReducer,
    res:resultReducer
})

const logger = (store)=>
{
    return next =>
    {
        return action=>
        {
            console.log('[MiddleWare], Dispatching',action)
            const result = next(action)
            console.log('[MiddleWare] nextState',store.getState())
            return result;
        }
    }
}
//Takes Reducer as an input
const store = createStore(rootReducer, applyMiddleware(logger) );

ReactDOM.render(<Provider store = { store }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
