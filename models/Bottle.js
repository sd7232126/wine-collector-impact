// Bottle Model for a wine bottle collection
const mongoose = require('mongoose');
const { Schema } = mongoose;

const bottleSchema = new Schema({
  name: String,
  description: String,
  producer: String,
  year: String,
  rating: String,
  comment: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('bottles', bottleSchema);