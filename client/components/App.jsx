import React from 'react';
import Price from './Price.jsx';
import Selection from './Selection.jsx';
import SalesEnd from './SalesEnd.jsx';
import PeopleWant from './PeopleWant.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {


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