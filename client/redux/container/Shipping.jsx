import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleDisplayCountry, toggleDisplayZipcode, 
        receiveShippingCost, selectCountry, enterZipcode, 
        toggleDisplayErrorMessage } from '../action/index';
import axios from 'axios';
import postcode from 'postcode-validator';
import styles from '../../style.css';

class Shipping extends React.Component {

    handleClick() {
        //display error message, if zipcode error
        if (this.props.displayZipcode === 'block' 
            && this.props.displayCountry === 'block') {
            this.props.toggleDisplayErrorMessage(true);
        } else {
            //display country options
            this.props.toggleDisplayCountry(true);
        }
    }

    handleCountryChange(e) {
        //dispatch function
        //assess whether call fetchcost function or display zipcode
        if (e.target.value === 'none') {
            return;
        }
        if (e.target.value !== 'United States') {
            this.fetchShippingCost(this.props.shippingInfo.country, e.target.value);
            this.props.toggleDisplayZipcode(false);
        } else {
            //display zip code
            this.props.toggleDisplayZipcode(true);
        }
    }

    handleZipChange(e) {
        //if input zipcode is validated
        if (postcode.validate(e.target.value, 'US')) {
            //fetch data
            this.fetchShippingCost(this.props.shippingInfo.country, 
                'United States');
            //send data to store
            this.props.enterZipcode(e.target.value);
        }
    }

    fetchShippingCost(departure, destination) {
        axios.get(`/purchase/shippingCost/${departure}/${destination}`)
          .then((response) => {
                //display shipping cost info
                this.props.receiveShippingCost(response.data);
          })
          .then(() => {
                this.props.selectCountry(destination);
                //hide country
                this.props.toggleDisplayCountry(false);
                //hide error message
                this.props.toggleDisplayErrorMessage(false);
          })
          .catch((error) => {
              throw error;
          });
    }

    displayCost(destination, zipcode, cost) {
        if (destination !== 'United States') {
            zipcode = '';
        }
        if (cost === 0) {
            return `Free shipping to ${destination} ${zipcode} `;
        }
        if (cost > 0) {
            return `$${cost} shipping to ${destination} ${zipcode}`; 
        }
        return 'Get Shipping Cost';
    }


    render() {
        return (
            <div id={styles.shipping}>
                <h2 className={styles.h2}>Shipping & returns</h2>
                <div id={styles.shippingDays} className={styles.shippingInfo}>
                    { `Made just for you. Ready to ship in 
                    ${ this.props.shippingInfo['min_days'] } – 
                    ${ this.props.shippingInfo['max_days'] } days.` }
                </div>
                <div className={styles.shippingInfo}>
                    From { this.props.shippingInfo.country }
                </div>
                <div className={styles.shippingInfo}>
                    <a 
                        className={styles.a}
                        href="#country" 
                        onClick={() => this.handleClick()}>
                        { this.displayCost(
                            this.props.destination,
                            this.props.zipCode,
                            this.props.shippingCost
                          )
                        }
                    </a>
                </div>
                <div style={{ display: this.props.displayCountry }}>
                    <div id={styles.country}>
                        Country
                        <div>
                            <select 
                                id ={styles.countrySelect}
                                value={this.props.destination}
                                 onChange={(e) => this.handleCountryChange(e)}
                            >
                                <option value="none">Choose Country</option>
                                { destinCountry.map((country) => 
                                    <option value={ country } key={ country }>
                                        { country }
                                    </option>
                                )}
                                
                            </select>
                        </div>
                    </div>
                    <div id={styles.zip} style={{ display: this.props.displayZipcode }}>
                        Zip or postal code
                        <div>
                            <input 
                                id={styles.zipSelect}
                                type="text"
                                onChange={(e) => this.handleZipChange(e)}
                            />
                        </div>
                        <div 
                            id={styles.zipError} 
                            style={{ display: this.props.displayErrorMessage }}
                        >
                            Please enter a valid zip code
                        </div>
                    </div>
                </div>
                <div id={styles.upgrade}>
                    Shipping upgrades available in the cart
                </div>
                <div id={styles.return}>
                    <strong>Returns and exchanges accepted</strong><br/>
                    { 'Exceptions may apply. ' }
                    <a className={styles.a} href="return">See return policy</a>  
                </div>
            </div>
        );
    }
}


const destinCountry = ['United States', 'China', 'Russia',  
                        'Japan', 'France', 'Thailand', 'Sweden',
                        'Malaysia', 'Portugal','Bulgaria', 'Indonesia'];


const matchStateToProps = (state) => {
    return {
        shippingInfo: state.shippingInfo,
        displayCountry: state.displayCountry ? 'block' : 'none',
        displayZipcode: state.displayZipcode ? 'block' : 'none',
        displayErrorMessage: state.displayErrorMessage ? 'block' : 'none',
        destination: state.destination,
        zipCode: state.zipcode,
        shippingCost: state.shippingCost
    
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        toggleDisplayCountry: toggleDisplayCountry,
        selectCountry: selectCountry,
        toggleDisplayZipcode: toggleDisplayZipcode,
        toggleDisplayErrorMessage: toggleDisplayErrorMessage,
        enterZipcode: enterZipcode,
        receiveShippingCost: receiveShippingCost
    }, dispatch);
};

export default connect(
    matchStateToProps,
    matchDispatchToProps
)(Shipping);