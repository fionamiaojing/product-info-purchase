import { combineReducers } from 'redux';
import groupItems from './products';
import allItems from './allitems';
import { optionChoice, quantityChoice } from './userChoice';
import { displayError } from './displayError';

const allReducers = combineReducers({
    group: groupItems,
    allItems: allItems,
    optionChoice: optionChoice,
    quantityChoice: quantityChoice,
    displayError: displayError,
});

export default allReducers;