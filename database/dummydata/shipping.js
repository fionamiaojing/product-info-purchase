const mongoose = require('mongoose');
const db = require('../mongodb.js');

let country = ['Bulgaria', 'China', 'Russia', 'Indonesia', 
                'Japan', 'France', 'Thailand', 'Sweden',
                'Malaysia', 'Portugal', 'United States'];
let ctry; 
let minDay;
let maxDay;
let cost;

let generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
};

for (let id = 1001; id <= 1100; id++) {
    ctry = country[generateRandomNumber(11)];
    minDay = generateRandomNumber(10) + 1;
    maxDay = minDay + 1 + generateRandomNumber(10);
    let newInfo = new db.ShippingInfo({
        fake_group_id: id,
        min_days: minDay,
        max_days: maxDay,
        country: ctry
    });
    newInfo.save();
}

for (let dptrIndex = 0; dptrIndex < 11; dptrIndex++) {
    for (let dstnIndex = 0; dstnIndex < 11; dstnIndex++) {
        let departure = country[dptrIndex];
        let destination = country[dstnIndex];
        cost = Math.round(Math.random()) ? 0: 5 + generateRandomNumber(20);
        let shippingcost = new db.ShippingCost({
            departure: departure,
            destination: destination,
            cost: cost
        });
        shippingcost.save();
    }
}