const mongoose = require('mongoose');
const db = require('../mongodb.js');

//Dummy data generator, please drop all relavent tables before run this file
//run node items.js in terminal to generate the dummy data

let generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
};
let maxOriginPrice;
let color;
let size;
let discountPattern = [0, 0, 0, - 0.05, 0, - 0.1, 0, 0, 0, -0.2]; //total 10

let generateTemplate = (fakeID, clr, sz, originPrice, discountPrice) => {
    return {
            fake_group_id: fakeID,
            color: clr,
            size: sz,
            original_price: originPrice,
            discounted_price: discountPrice
            };
};

//Shoes - fakeID from 1001 - 1025

color = ["Black", "Beige", "Champagne", "Flesh", "Blue", "Gray",
            "Red", "White"];
size = [];
for (let s = 5.5; s < 11; s = s + 0.5) {
    size.push(s);
}
maxOriginPrice = 500;

for (let groupID = 1001; groupID <= 1025; groupID++) {
    //create base Price for the product
    let basePrice = generateRandomNumber(maxOriginPrice);
    for (let sizeIndex = 0; sizeIndex < size.length; sizeIndex++) {
        // generate the discount percent 'randomly'
        let discount = discountPattern[generateRandomNumber(10)];
        let discountPrice = Math.round(basePrice * (1 + discount));
        for (let colorIndex = 0; colorIndex < color.length; colorIndex++) {
            let property = generateTemplate(
                groupID, color[colorIndex], size[sizeIndex],
                basePrice, discountPrice
            );
            let shoe = new db.Shoes(property);
            shoe.save();
            // randomly increase price, if true, increase; else not
            basePrice += Math.round(Math.random()) ? Math.floor(0.05 * basePrice) : 0;
        }
    }
}

//Clothes - fakeID from 1026 - 1060;

color = ["Black", "Yellow", "Gray", "Red", "White"];
size = ["XS", "S", "M", "L", "XL"];
maxOriginPrice = 800;

for (let groupID = 1026; groupID <= 1060; groupID++) {
    //create base Price for the product
    let basePrice = generateRandomNumber(maxOriginPrice);
    for (let sizeIndex = 0; sizeIndex < size.length; sizeIndex++) {
        // generate the discount percent 'randomly'
        let discount = discountPattern[generateRandomNumber(10)];
        let discountPrice = Math.round(basePrice * (1 + discount));
        for (let colorIndex = 0; colorIndex < color.length; colorIndex++) {
            let property = generateTemplate(
                groupID, color[colorIndex], size[sizeIndex],
                basePrice, discountPrice
            );
            let cloth = new db.Clothes(property);
            cloth.save();
            // randomly increase price, if true, increase; else not
            basePrice += Math.round(Math.random()) ? Math.floor(0.05 * basePrice) : 0;
        } 
    }
}


//For Handbag and home:

//Handbag - fakeID from 1061 - 1085;
maxOriginPrice = 5000;

for (let groupID = 1061; groupID <= 1085; groupID++) {
    //create base Price for the product
    let originPrice = generateRandomNumber(maxOriginPrice);
    let discount = discountPattern[generateRandomNumber(10)];
    let discountPrice = Math.round(originPrice * (1 + discount));

    let handbag = new db.Others({
        fake_group_id: groupID,
        original_price: originPrice,
        discounted_price: discountPrice
    });
    handbag.save();
}

//Home- fakeID from 1086 - 1100;
maxOriginPrice = 800;

for (let groupID = 1086; groupID <= 1100; groupID++) {
    //create base Price for the product
    let originPrice = generateRandomNumber(maxOriginPrice);
    let discount = discountPattern[generateRandomNumber(10)];
    let discountPrice = Math.round(originPrice * (1 + discount));

    let home = new db.Others({
        fake_group_id: groupID,
        original_price: originPrice,
        discounted_price: discountPrice
    });
    home.save();
}
