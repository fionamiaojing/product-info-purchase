import React from 'react';
import axios from 'axios';
import Price from './Price.jsx';
import Selection from './Selection.jsx';
import AlmostGone from './AlmostGone.jsx';
import PeopleWant from './PeopleWant.jsx';
import Overview from './Overview.jsx';
import Shipping from './Shipping.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pid: '',
            group: {},
            items: {},
            username: 'hrsf950001',
            options: {},
            quantity: 1,
            selectedItemId: "", //initialize when componentDidMount
            originalPrice: '',
            discountedPrice: '',
            displayError: false,
            shippingInfo: {},
        };
       this.detectSelection = this.detectSelection.bind(this);
       this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount() {
        this.fetchProduct((data) => {
            this.setState({
                group: data.group,
                items: data.items
            });
            if (
                data.group.category === "Handbags" || 
                data.group.category === "Home") {
               let item = data.items[0];
               this.setState({
                   selectedItemId: item['_id'],
                   originalPrice: item['original_price'],
                   discountedPrice: item['discounted_price']
               });
            } else {
               this.setPrices(data.items);
            }
        });
        //fetch shipping information
        this.fetchShippingInfo((data) => {
            this.setState({
                shippingInfo: data
            });
        });
    }

    detectSelection(quantity, options) {
        // update option and quantity
        this.setState({
            options: options || this.state.options,
            quantity: quantity || this.state.quantity
        });
        // assess if all options are provided
        if (!options) {
            //if options not provided, do nothing
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
            this.send({
                itemId: this.state.selectedItemId,
                quantity:  this.state.quantity 
            });
        }
    }

    send(cartItem) {
        axios.post(`/listing/${this.props.pid}/cart/${this.state.username}`, cartItem)
        //   .then((response) => {
        //       console.log(response.data);
        //   })
          .catch((error) => {
              throw error;
          });
    }

    fetchProduct(callback) {
        axios.get(`/listing/item/${this.props.pid}`)
          .then((response) => {
              callback(response.data);
          })
          .catch((error) => {
              throw error;
          });
    }

    fetchShippingInfo(callback) {
        axios.get(`/listing/${this.props.pid}/shippingInfo`)
          .then((response) => {
              callback(response.data);
          })
          .catch((error) => {
              throw error;
          });
    }

    render() {
        return (
            <div className="sidebar">
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
                <button className='buttons' id="buy" onClick={this.handleClick}>Buy it now ></button>
                <button className='buttons' id="add" onClick={this.handleClick}>Add to cart</button>
                <div id="bottom">
                    {this.state.group['number_in_storage'] < 10 ?
                       <AlmostGone amount={this.state.group['number_in_storage']}/> :
                       <PeopleWant amount={this.state.group['count_in_cart']}/>
                    }
                </div>
                <hr/>
                <div id="overview">
                    <h2>Overview</h2>
                    {Object.keys(this.state.group).length > 0 ? 
                        <Overview info={this.state.group}/> :
                        ''
                    }
                </div>
                <hr/>
                <div>
                   <h2>Shipping & returns</h2>
                   <Shipping 
                        shippingInfo={this.state.shippingInfo}
                        pid={this.props.pid}/>
                </div>
                <hr/>
            </div>
        );
    }
}