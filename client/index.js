import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './style.css';
// import App from './components/App.jsx';
import App from './redux/components/App.jsx';
import allReducers from './redux/reducer/index';

// let pid = document.URL.match(/\/[\w]+\/([\d]+)/)[1];

const store = createStore(
    allReducers,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('purchase')
);