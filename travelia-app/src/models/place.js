const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlaceSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  place: {type: String, required: true},
  sits: {type: Number, required: true},
  date: {type: Date, required: true}
});

module.exports = mongoose.model('Place', PlaceSchema);
