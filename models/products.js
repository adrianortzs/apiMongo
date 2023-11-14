const mongoose = require('mongoose');
const {Schema} = require("mongoose");
require('../config/db_mongo')

const objectSchema = {
    title: { 
        type: String, 
        required: true,
    },
    price: { 
        type: String, 
        required: true,
    },
    description: { 
        type: String, 
        required: true 
    },
    provider:{
        type: Schema.Types.ObjectId,
        ref: "providers",
        // required: true,
    }
};

const productsSchema = mongoose.Schema(objectSchema);

const products = mongoose.model('products', productsSchema);

module.exports = products;