const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    firstName: {
        type: String,
        required: [true, 'firstName is required!'],
        maxlength: 20
    },
    lastName: {
        type: String,
        required: [true, 'lastName is required!'],
        maxlength: 30
    },
    email: {
        type: String,
        required: [true, 'email is required!'],
        minlength: 3,
        maxlength: 50,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'password is required!'],
        minlength: 6,
    },
    createdAt: String,
});

module.exports = mongoose.model('users', User);