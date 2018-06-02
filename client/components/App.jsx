import React from 'react';
import Price from './Price.jsx';
import Selection from './Selection.jsx';
import SalesEnd from './SalesEnd.jsx';
import PeopleWant from './PeopleWant.jsx';
import data from './example.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            group: data.group,
            items: data.items
        };
    }

    render() {
        console.log(this.state.group, this.state.items);

        return (
            <div id="sidebar">
                <div id="tophalf">
                    <h1>Title</h1>
                    <div>
                        <Price />
                        <Selection />
                    </div>
                </div>
                <button id="add">Add to cart</button>
                <div id="bottom">
                   <SalesEnd />
                   <PeopleWant />
                </div>
            </div>
        );
    }
}