import { combineReducers } from 'redux';
import groupItems from './products';
import allItems from './allitems';

const allReducers = combineReducers({
    group: groupItems,
    allItems: allItems
});

export default allReducers;