const express = require('express');
const helper = require('./helper.js');

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public'));

//POST request when customer hit add to cart button
app.post('/cart/:userID', (req, res) => {
    // console.log(req.body);
    // console.log(req.params.userID);
    helper.saveToCartDatabase( 
        req.params.userID, 
        req.body
    )
     .then((result) => {
         res.status(201).send("Created");
     })
     .catch((error) => {
         res.status(400).send("BAD REQUEST");
     });
});

//GET request when the page renders
app.get('/products/:id', (req, res) => {
    let output;
    helper.fetchGroup(req.params.id)
      .then((groupItemResult) => {
          output = groupItemResult[0];
          return groupItemResult[0].category;
      })
      .then((category) => {
        return helper.fetchItems(req.params.id, category);
      })
      .then((detailedItemResults) => {
        res.status(200).send({group: output, items: detailedItemResults});
      })
      .catch((error) => {
          res.status(400).send("BAD REQUEST");
      });

});

//GET request when customer request for shipping info
app.get('/shippingInfo/:id', (req, res) => {
    helper.fetchShippingInfo(req.params.id)
      .then((data) => {
          res.status(200).send(data[0]);
      })
      .catch((err) => {
          res.status(400).send("NOT FOUND");
      });
});

app.get('/shippingCost/:departure/:destination', (req, res) => {
    //get product data based on the fake_groupID
    helper.fetchShippingCost(req.params.departure, req.params.destination)
      .then((data) => {
          res.status(200).send({cost: data[0].cost});
      })
      .catch((err) => {
          res.status(400).send("NOT FOUND");
      });
});

const PORT = 3003;

app.listen(PORT, function() {
    console.log("Listening on port 3003!");
});