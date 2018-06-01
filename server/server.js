const express = require('express');

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public'));

//POST request when customer hit add to cart button
app.post('/cart', (req, res) => {
    console.log(req.body);
    //the url should look like /cart/:userID
    console.log(req.url);
});

//GET request when the page renders
app.get('/products', (req, res) => {
    //the url should look like /products/:fake_groupID
    console.log(req.url);
    //get product data based on the fake_groupID
});

//GET request when customer request for shipping info
//may need to be put before get '/products'
app.get('/shipping_info', (req, res) => {
    //the url should look like /shipping/:fake_groupID/other info??
    console.log(req.url);
    //get product data based on the fake_groupID
});

app.post('/shipping_cost', (req, res) => {
    //the url should look like /shipping/:fake_groupID/other info??
    console.log(req.url);
    //get product data based on the fake_groupID
    //check the correctness
});

app.get('/shipping_cost', (req, res) => {
    //the url should look like /shipping/:fake_groupID/other info??
    console.log(req.url);
    //get product data based on the fake_groupID
});

const PORT = 3003;

app.listen(PORT, function() {
    console.log("Listening on port 3003!");
});