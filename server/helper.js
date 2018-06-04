const db = require('../database/mongodb.js');
const mongoose = require('mongoose');
const Promise = require('promise');

//fetch group data
let fetchGroup = (fakeID) => {
    return new Promise((resolve, reject) => {
        db.Group.find({fake_id: fakeID}, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

//fetch items data
let fetchItems = (fakeID, category) => {
    return new Promise((resolve, reject) => {
        categoryDetect(category).find({fake_group_id: fakeID}).find((err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

let categoryDetect = (category) => {
    switch(category) {
        case "Shoes":
            return db.Shoes;
        case "Clothes":
            return db.Clothes;
        default:
            return db.Others;
    }
};

//post item-to-be-added-to-data to database
let saveToCartDatabase = (userId, {itemId, quantity}) => {
    let cartItem = new db.CartItem({
        user_id: userId,
        item_id: itemId,
        quantity: quantity
    });
    return new Promise((resolve, reject) => {
        cartItem.save((err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

//fetch shipping Information
let fetchShippingInfo = (fakeID) => {
    return new Promise((resolve, reject) => {
        db.ShippingInfo.find({fake_group_id: fakeID}, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

//fetch shipping cost
let fetchShippingCost = (departure, destination) => {
    return new Promise((resolve, reject) => {
        db.ShippingCost.find({
            departure: departure,
            destination: destination
        }, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};


module.exports = {
    fetchGroup,
    fetchItems,
    saveToCartDatabase,
    fetchShippingInfo,
    fetchShippingCost
};