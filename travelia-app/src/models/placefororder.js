const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlaceForOrderSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  place: {type: String, required: true},
  boughtsits: {type: Number, required: true},
  cost: {type: Number, required: true},
  date: {type: String, required: true},
  image: {type: String, required: false}
});

module.exports = mongoose.model('PlaceForOrder', PlaceForOrderSchema);
