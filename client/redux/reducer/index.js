import { combineReducers } from 'redux';
import { groupItems } from './products';
import { allItems } from './allitems';
import { optionChoice, quantityChoice, 
        destination, zipcode } from './userChoice';
import { displayError, displayErrorMessage } from './displayError';
import { shippingInfo, shippingCost } from './shippingInfo';
import { displayCountry, displayZipcode } from './displayCtryANDZip';

const allReducers = combineReducers({
    group: groupItems,
    allItems: allItems,
    optionChoice: optionChoice,
    quantityChoice: quantityChoice,
    displayError: displayError,
    shippingInfo: shippingInfo,
    shippingCost: shippingCost,
    displayCountry: displayCountry,
    displayZipcode: displayZipcode,
    destination: destination,
    zipcode: zipcode,
    displayErrorMessage: displayErrorMessage,
});

export default allReducers;