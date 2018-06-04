import React from 'react';
import axios from 'axios';
import Price from './Price.jsx';
import Selection from './Selection.jsx';
import AlmostGone from './AlmostGone.jsx';
import PeopleWant from './PeopleWant.jsx';
import Overview from './Overview.jsx';
import Shipping from './Shipping.jsx';
import data from './example.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            group: data.group,
            items: data.items,
            username: 'hrsf950001',
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
        if (this.state.selectedItemId === '') {
            this.setState({
                displayError: true
            });
        } else {
            //need to trigger POST request
            this.send({
                itemId: this.state.selectedItemId,
                quantity:  this.state.quantity 
            });
        }
    }

    send(cartItem) {
        axios.post(`/cart/${this.state.username}`, cartItem)
          .then((response) => {
              console.log(response.data);
          })
          .catch((error) => {
              console.log(error);
          });
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
                    {this.state.group['number_in_storage'] < 10 ?
                       <AlmostGone amount={this.state.group['number_in_storage']}/> :
                       <PeopleWant amount={this.state.group['count_in_cart']}/>
                    }
                </div>
                <hr/>
                <div id="overview">
                    <h2>Overview</h2>
                    <Overview info={this.state.group}/>
                </div>
                <hr/>
                <div id="shipping">
                   <Shipping />
                </div>
            </div>
        );
    }
}