const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/etsy');

//GROUP ITEM----------------------------------------------------------------->
//group item schema for all products
let groupItemSchema = mongoose.Schema({
    fake_id: Number,
    title: String,
    category: String,
    count_in_cart: {type: Number, default: 0},
    number_in_storage: {type: Number, default: 0},
    overview: { 
                handmade: { type: Boolean, default: true },
                made_to_order: { type: Boolean , default: true},
                gift_message: { type: Boolean , default: true},
                material: {type: String}
              },
    favorate: {type: Number, default: 0},
  });

let Group = mongoose.model("Group", groupItemSchema);

//Item schema for Four categories ------------------------------------------->
//Shoes
let shoeSchema = mongoose.Schema({
    fake_group_id: Number,
    color: String,
    size: String,
    original_price: Number,
    discounted_price: Number
});

let Shoes = mongoose.model("Shoes", shoeSchema);

//Clothes
let clothesSchema = mongoose.Schema({
    fake_group_id: Number,
    color: String,
    size: String,
    original_price: Number,
    discounted_price: Number
});

let Clothes = mongoose.model("Clothes", clothesSchema);

//Handbag and Home
let otherSchema = mongoose.Schema({
    fake_group_id: Number,
    original_price: Number,
    discounted_price: Number
});

let Others = mongoose.model("Others", otherSchema);


//Schema for Cart Item (for POST request) ------------------------------------>

let cartSchema = mongoose.Schema({
    user_id: Number,
    item_id: String, //should link to the item_id for each product
});

let CartItem = mongoose.model("Cart", cartSchema);


module.exports = {
    Group,
    Clothes,
    Shoes,
    Others,

};