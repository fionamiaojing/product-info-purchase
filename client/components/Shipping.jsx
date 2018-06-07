import React from 'react';
import axios from 'axios';
import postcode from 'postcode-validator';

export default class Shipping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayCountry: 'none',
            displayZip: 'none',
            destinCountry: ['United States', 'China', 'Russia',  
                            'Japan', 'France', 'Thailand', 'Sweden',
                            'Malaysia', 'Portugal','Bulgaria', 'Indonesia'],
            selectedCountry: 'none',
            zipCode: '',
            displayErrorMessage: 'none',
            shippingCost: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);
        this.fetchShippingCost = this.fetchShippingCost.bind(this);
    }

    handleClick() {
        //if country is selected but zipcode is empty, 
        //which means something wrong with zipcode, then display errorMessage
        if (this.state.selectedCountry === "United States" 
            && !this.state.zipCode) {
        // display error message
            this.setState({
                displayErrorMessage: 'block'
            });
        //otherwise, toggle the state
        } else {
            //otherwise, toggle the state and clear up the input and select field
            this.toggleDisplay();
        } 
    }

    toggleDisplay() {
        let currentDisplay = this.state.displayCountry;
        this.setState({
            displayCountry: currentDisplay === 'none' ? 'block' : 'none',
        }); 
    }

    //fetch shipping cost info from database

    fetchShippingCost(departure, destination) {
        axios.get(`/listing/shippingCost/${departure}/${destination}`)
          .then((response) => {
              //display shipping cost info
              this.setState({
                  shippingCost: response.data.cost
              });
              this.toggleDisplay();
          })
          .catch((error) => {
              console.log(error);
          });
    }

    handleCountryChange(event) {
        //if selected country is US, ask user to input zipcode
        if (event.target.value !== 'United States') {
            this.fetchShippingCost(this.props.shippingInfo.country, 
                event.target.value);
            this.setState({
                selectedCountry: event.target.value,
                zipCode: ''
            });
        } else {
             //otherwise, call fetchshipping cost
            this.setState({
                zipCode: '',
                displayZip: 'block'
            });
        }   
    }

    handleZipChange(event) {
        //if input zipcode is validated
        if (postcode.validate(event.target.value, 'US')) {
            //fetch data
            this.fetchShippingCost(this.props.shippingInfo.country, 
                'United States');
            //set state of zipcode
            this.setState({
                selectedCountry: 'United States',
                zipCode: event.target.value
            });
        }
        //otherwise, do nothing
    }

    render() {
        return (
            <div id='shipping'>
                <div id='shippingDays' className='shippingInfo'>
                    {`Made just for you. Ready to ship in 
                    ${this.props.shippingInfo['min_days']} – 
                    ${this.props.shippingInfo['max_days']} days.`}
                </div>
                <div className='shippingInfo'>
                    From {this.props.shippingInfo.country}
                </div>
                <div className='shippingInfo'>
                    <a href="#country" onClick={this.handleClick}>
                        {this.state.shippingCost ? 
                        `$${this.state.shippingCost} shipping to 
                        ${this.state.selectedCountry} ${this.state.zipCode}` :
                        'Get Shopping Cost'
                        }
                    </a>
                </div>
                <div style={{display: this.state.displayCountry}}>
                    <div id='country'>
                        Country
                        <div>
                            <select 
                                id ='countrySelect'
                                onChange={this.handleCountryChange}
                            >
                                <option value="none">Choose Country</option>
                                {this.state.destinCountry.map((country) => 
                                    <option value={country} key={country}>{country}</option>
                                )}
                                
                            </select>
                        </div>
                    </div>
                    <div id='zip' style={{display: this.state.displayZip}}>
                        Zip or postal code
                        <div>
                            <input 
                                id='zipSelect'
                                type="text" 
                                onChange={this.handleZipChange}
                            />
                        </div>
                        <div 
                            id='zipError' 
                            style={{display: this.state.displayErrorMessage}}>
                            Please enter a valid zip code
                        </div>
                    </div>
                </div>
                <div id='upgrade'>
                    Shipping upgrades available in the cart
                </div>
                <div id='return'>
                    <strong>Returns and exchanges accepted</strong><br/>
                    {'Exceptions may apply. '}
                    <a href="">See return policy</a>  
                </div>
            </div>
        );
    }
}