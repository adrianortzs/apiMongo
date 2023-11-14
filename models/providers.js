const mongoose = require('mongoose');
require('../config/db_mongo')

const objectSchema = {
    company_name: { 
        type: String, 
        required: true,
    },
    CIF: { 
        type: String, 
        required: true,
        unique: true
    },
    address: { 
        type: String, 
        required: true 
    },
    url_web:{
        type: String,
        required: true,
    }
};

const providerSchema = mongoose.Schema(objectSchema);

const provider = mongoose.model('providers', providerSchema);

module.exports = provider;