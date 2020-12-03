import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import reducer from './store/reducer'


//Takes Reducer as an input
const store = createStore(reducer );

ReactDOM.render(<Provider store = { store }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
