# Itsy Sidebar Components

Contains Add-To-CART, product overview and shipping infomation of the product.
A clone of Etsy product page

## Table of Contents

1. [Demo](#Demo)
2. [Requirements](#requirements)
3. [Development](#development)

## Demo
<img src="https://github.com/hrsf-narwhal/product-info-purchase/blob/master/Itsy_demo.gif" />

## Requirements

- Node 6.13.0
- Nodemon
- Mongo DB

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
npm run react-dev

```

### Setup Database

```sh
mongod --dbpath {pathto}data (anywhere on your computer)
mongo (From within the root directory)

```

### Generate Dummy Data

cd into /database/dummydata folder

```sh
node groupItem.js
node item.js
node shipping.js

```

### Run Server

From within the root directory:

```sh
npm run start
open localhost:3003/listing/:id (from 1001 to 1100)

```

## Other key issue

### static URL and API endpoints

Server-Side:
- refer to a const named 'staticURL'

Client-Side:
- two axios.get request in App.jsx (client/redux/components)
- one axios.post request in AddButton.jsx (client/redux/container)
- one axios.get request in Shipping.jsx (client/redux/container)

