const mongoose = require('mongoose');
const { Schema } = mongoose;
const PlaceForOrder = require('./placefororder').schema;

const OrderSchema = new Schema({
  places: {type: [PlaceForOrder], default: undefined},
  total: {type: Number, required: true},
  date: {type: String, required: true},
});

module.exports = mongoose.model('Order', OrderSchema);
