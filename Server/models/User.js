const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const UserModel = mongoose.model('User', UserSchema); // Match collection name
module.exports = UserModel; // Fix typo here