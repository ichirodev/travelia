const mongoose = require('mongoose');
const { Schema } = mongoose;

const LocationSchema = new Schema({
    title: {type: String, required: true},
    place: {type: String, required: true},
    description: {type: String, required: false},
    price: {type: Number, required: true},
});

module.exports = mongoose.model('Location', LocationSchema);