const mongoose = require('mongoose');
const db = require('../mongodb.js');

//Dummy data generator, please drop the group table before run this file
//run node groupItem.js in terminal to generate the dummy data

//generate group itmes for each category
let groupId = 1001;
let category;
let title;
let maxCart;
let maxStorage;
let maxFavorite;
let material;
let generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
};

let generateTemplate = (
    fakeId, ttl, ctgr, countInCart,
    numberInStorage, mtrl, favorite) => {
    return {
            fake_id: fakeId,
            title: ttl,
            category: ctgr,
            count_in_cart: countInCart,
            number_in_storage: numberInStorage,
            overview: {material: mtrl},
            favorite: favorite
            };
};

//shoes - 25
category = "Shoes";
maxCart = 60;
maxStorage = 20;
title = ["Leather sandals", "Wedding shoes", "Greek leather boots", 
        "Lace up high heel", "Handmade slipper", "High top sneaker", "Ballerina shoes", "Mules", "Glitter heels"];
material = ["Leather", "Natural rubber", "Canvas", 
            "Suede", "Faux Leather"];
maxFavorite = 1000;

for (let i = 0; i < 25; i++) {

    let property = generateTemplate(
        groupId, title[i % title.length], category,
        generateRandomNumber(maxCart), generateRandomNumber(maxStorage),
        material[i % material.length], generateRandomNumber(maxFavorite)
    );
    let shoe = db.Group(property);
    shoe.save();
    groupId++;
}

//clothes - 35
category = "Clothes";
maxCart = 30;
maxStorage = 40;
title = ["T-shirt", "Wool Knit Coat", "Custom Sweater", 
        "Woman Up Sweat Shirt", "Bridesmain Dress", 
        "Personalized fancy dress", "Ivory Lace Long Sleeves"];
material = ["Cotton", "Wool", "Silk", "Polyesters"];
maxFavorite = 100;

for (let i = 0; i < 35; i++) {

    let property = generateTemplate(
        groupId, title[i % title.length], category,
        generateRandomNumber(maxCart), generateRandomNumber(maxStorage),
        material[i % material.length], generateRandomNumber(maxFavorite)
    );
    let cloth = db.Group(property);
    cloth.save();
    groupId++;
}


//handbags: 25
category = "Handbags";
maxCart = 20;
maxStorage = 20;
title = ["Evening clutch", "Crossbody Bag", "Backpack", 
        "Leather Handbag", "Canvas purse", "Leather Tote",
        "Shoulder bag", "Envelope clutch bag", "Handmade purse"];
material = ["Leather", "Canvas", "Suede", "Nylon", "Faux Leather"];
maxFavorite = 300;

for (let i = 0; i < 25; i++) {

    let property = generateTemplate(
        groupId, title[i % title.length], category,
        generateRandomNumber(maxCart), generateRandomNumber(maxStorage),
        material[i % material.length], generateRandomNumber(maxFavorite)
    );
    let handbag = db.Group(property);
    handbag.save();
    groupId++;
}

//home: 15
category = "Home";
maxCart = 40;
maxStorage = 10;
title = ["Home Decor", "House warming gift", "Model Style Stuff"];
maxFavorite = 30;

for (let i = 0; i < 15; i++) {

    let property = generateTemplate(
        groupId, title[i % title.length], category,
        generateRandomNumber(maxCart), generateRandomNumber(maxStorage),
        "", generateRandomNumber(maxFavorite)
    );
    let home = db.Group(property);
    home.save();
    groupId++;
}