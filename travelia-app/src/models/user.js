const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  mail: {type: String, required: true},
  password: {type: String, required: true},
  firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  registered: {type: String, required: true},
  loginkey: {type: String, required: true},
  orders: {type: [String], required: false}
});

module.exports = mongoose.model('User', UserSchema);
