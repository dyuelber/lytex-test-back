const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    age: {
        require: true,
        type: Number
    }
})

module.exports = mongoose.model('Users', schema);
