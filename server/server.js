const express = require('express');
const helper = require('./helper.js');

const app = express();

const staticURL = '/purchase';

app.use(express.json());
//make html request like http://localhost:3003/purchase/id
app.use('/listing/:id', express.static(__dirname + '/../public'));

//POST request when customer hit add to cart button
app.post(staticURL + '/cart/:userID', (req, res) => {
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
app.get(staticURL + '/item/:id', (req, res) => {
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
app.get(staticURL + '/shippingInfo/:id', (req, res) => {
    helper.fetchShippingInfo(req.params.id)
      .then((data) => {
          res.status(200).send(data[0]);
      })
      .catch((err) => {
          res.status(400).send("NOT FOUND");
      });
});

app.get(staticURL + '/shippingCost/:departure/:destination', (req, res) => {
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