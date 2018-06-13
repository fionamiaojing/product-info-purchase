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
let maxReviews;
let material;
let generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
};

let generateTemplate = (
    fakeId, ttl, ctgr, countInCart,
    numberInStorage, mtrl, favorite, reviews) => {
    return {
            fake_id: fakeId,
            title: ttl,
            category: ctgr,
            count_in_cart: countInCart,
            number_in_storage: numberInStorage,
            overview: {material: mtrl},
            favorite: favorite,
            reviews: reviews
            };
};

//shoes - 25
category = "Shoes";
maxCart = 60;
maxStorage = 20;
title = ["Handmade high heel", "Wedding shoes", "Scalloped leather pump", 
        "Lace up high heel", "Sleek Patent Slingback Pump", "Ballerina shoes", "Glitter heels"];
material = ["Leather", "Natural rubber", "Canvas", 
            "Suede", "Faux Leather"];
maxFavorite = 1000;
maxReviews = 3000;

for (let i = 0; i < 25; i++) {

    let property = generateTemplate(
        groupId, title[i % title.length], category,
        generateRandomNumber(maxCart), generateRandomNumber(maxStorage),
        material[i % material.length], generateRandomNumber(maxFavorite),
        generateRandomNumber(maxReviews)
    );
    let shoe = new db.Group(property);
    shoe.save();
    groupId++;
}

//clothes - 35
category = "Clothes";
maxCart = 30;
maxStorage = 40;
title = ["Lost in Kyoto collection", "Japanese style outwear", 
        "Handmade painting top", "Loosing fit stripe adjustable kimono dress", 
        "Long kimono outwear", "Personalized fancy dress", 
        "Japanese crane short kimono dress"];
material = ["Cotton", "Silk", "Polyesters"];
maxFavorite = 100;
maxReviews = 500;

for (let i = 0; i < 35; i++) {

    let property = generateTemplate(
        groupId, title[i % title.length], category,
        generateRandomNumber(maxCart), generateRandomNumber(maxStorage),
        material[i % material.length], generateRandomNumber(maxFavorite),
        generateRandomNumber(maxReviews)
    );
    let cloth = new db.Group(property);
    cloth.save();
    groupId++;
}


//handbags: 25
category = "Handbags";
maxCart = 20;
maxStorage = 20;
title = ["Yoga mat bag", "Crossbody bag", "Handcrafted vintage bag", 
        "Gardon flower bag", "Artisan beach bag", "Asian style Tote",
        "Bohomian clutch bag", "Half moon beach bag"];
material = ["Pom pom", "Canvas", "Embroidered", "Cotton", "Fabric"];
maxFavorite = 300;
maxReviews = 800;

for (let i = 0; i < 25; i++) {

    let property = generateTemplate(
        groupId, title[i % title.length], category,
        generateRandomNumber(maxCart), generateRandomNumber(maxStorage),
        material[i % material.length], generateRandomNumber(maxFavorite),
        generateRandomNumber(maxReviews)
    );
    let handbag = new db.Group(property);
    handbag.save();
    groupId++;
}

//home: 15
category = "Home";
maxCart = 40;
maxStorage = 10;
title = ["Espresso mug", "House warming gift", "Turquoise mug", "Coffee mug", 
        "Colorful mug tea cup", "Rustic mug"];
maxFavorite = 30;
maxReviews = 200;

for (let i = 0; i < 15; i++) {

    let property = generateTemplate(
        groupId, title[i % title.length], category,
        generateRandomNumber(maxCart), generateRandomNumber(maxStorage),
        "", generateRandomNumber(maxFavorite), generateRandomNumber(maxReviews)
    );
    let home = new db.Group(property);
    home.save();
    groupId++;
}

//try to close the connection after generating all dummy datas