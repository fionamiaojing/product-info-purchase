import { combineReducers } from 'redux';
import groupItems from './products';
import allItems from './allitems';
import { optionChoice, quantityChoice } from './userChoice';

const allReducers = combineReducers({
    group: groupItems,
    allItems: allItems,
    optionChoice: optionChoice,
    quantityChoice: quantityChoice
});

export default allReducers;