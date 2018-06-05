import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './components/App.jsx';

let pid = document.URL.match(/\/[\w]+\/([\d]+)/)[1];

ReactDOM.render(<App pid={pid}/>, document.getElementById('app'));