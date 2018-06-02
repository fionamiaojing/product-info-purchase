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
            items: data.items,
            options: {},
            quantity: {},
            selectedItemId: "", //initialize when componentDidMount
        };
       this.detectSelection = this.detectSelection.bind(this);
    }

    detectSelection(quantity, options) {
        console.log(quantity, options);
        // update option and quantity
        this.setState({
            options: options || this.state.options,
            quantity: quantity || this.state.quantity
        });
        // assess if all options are provided
        if (Object.keys(options).length === 2) {
            // set selectedItemID
            let id = this.state.items.filter((item) => {
                return item.color === options.color && item.size === options.size;
            })[0]['_id'];
            this.setState({
                selectedItemId: id
            });
        }
    }

    render() {
        return (
            <div id="sidebar">
                <div id="tophalf">
                    <h1>{this.state.group.title}</h1>
                    <div>
                        <Price 
                            items={this.state.items}
                            options={this.state.options}
                            selectedItemId={this.state.selectedItemId}/>
                        <Selection
                            category={this.state.group.category} 
                            items={this.state.items}
                            detectSelection={this.detectSelection}/>
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