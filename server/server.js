const express = require('express');

const app = express();

app.use(express.static(__dirname + '/../public'));

const PORT = 3001;

app.listen(PORT, function() {
    console.log("Listening on port 3001!");
});