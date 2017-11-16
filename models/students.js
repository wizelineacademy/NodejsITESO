const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Students = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true, trim: true },
  surname: { type: String, required: true, trim: true },
  phone: { type: String },
});

module.exports = mongoose.model('Students', Students);