import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers} from 'redux'

import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/results'

const rootReducer = combineReducers({
    ctr:counterReducer,
    res:resultReducer
})

//Takes Reducer as an input
const store = createStore(rootReducer );

ReactDOM.render(<Provider store = { store }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
