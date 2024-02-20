const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();


mongoose.connect(process.env.MONGODB_URL);

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 18
    }, username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 18
    },

});

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};