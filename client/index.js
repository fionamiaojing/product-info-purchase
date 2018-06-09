import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './style.css';
// import App from './components/App.jsx';
import App from './redux/components/App.jsx';
import allReducers from './redux/reducer/index';

// let pid = document.URL.match(/\/[\w]+\/([\d]+)/)[1];

const store = createStore(
    allReducers
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('purchase')
);