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
            quantity: 1,
            selectedItemId: "", //initialize when componentDidMount
            originalPrice: '',
            discountedPrice: '',
            displayError: false
        };
       this.detectSelection = this.detectSelection.bind(this);
       this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount() {
        if (this.state.group.category === "Handbags" || this.state.group.category === "Home") {
           let item = this.state.items[0];
           this.setState({
               selectedItemId: item['_id'],
               originalPrice: item['original_price'],
               discountedPrice: item['discounted_price']
           });
        } else {
           this.setPrices(this.state.items);
        }
    }

    detectSelection(quantity, options) {
        // console.log(quantity, options);
        // update option and quantity
        this.setState({
            options: options || this.state.options,
            quantity: quantity || this.state.quantity
        });
        // assess if all options are provided
        if (!options) {
            //set selectItem to none
            this.setState({
                selectedItemId: ''
            });
            return;
        }
        if (Object.keys(options).length === 2) {
            // set selectedItemID
            let matchItem = this.state.items.filter((item) => {
                return item.color === options.color && item.size === options.size;
            });
            this.setPrices(matchItem);
            let id = matchItem[0]['_id'];
            this.setState({
                selectedItemId: id
            });
        } else if (Object.keys(options).length === 1) {
            let key = Object.keys(options)[0];
            let matchItem = this.state.items.filter((item) => {
                return item[key] === options[key];
            });
            this.setPrices(matchItem);
            //set selectItem to none
            this.setState({
                selectedItemId: ''
            });
        }
    }

    setPrices(items) {
        let originalPrice = {};
        let discountedPrice = {};
        for (var item of items) {
            originalPrice[item['original_price']] = true;
            discountedPrice[item['discounted_price']] = true;
        }
        this.setState({
            originalPrice: Object.keys(originalPrice).map(
                (e) => Number(e)).sort((a, b) => {
                                return a - b;
                }),
            discountedPrice: Object.keys(discountedPrice).map(
                (e) => Number(e)).sort((a, b) => {
                    return a - b;
                }),
        });
    }

    handleClick() {
        console.log(this.state.selectedItemId);
        if (this.state.selectedItemId === '') {
            this.setState({
                displayError: true
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
                            originalPrice={this.state.originalPrice}
                            discountedPrice={this.state.discountedPrice}/>
                        <Selection
                            category={this.state.group.category} 
                            items={this.state.items}
                            displayError={this.state.displayError}
                            detectSelection={this.detectSelection}/>
                    </div>
                </div>
                <button id="add" onClick={this.handleClick}>Add to cart</button>
                <div id="bottom">
                   <SalesEnd />
                   <PeopleWant />
                </div>
            </div>
        );
    }
}