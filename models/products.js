const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    stock: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Products', schema);
