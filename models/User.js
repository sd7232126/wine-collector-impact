// User Model for an application user
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String
});

mongoose.model('users', userSchema);