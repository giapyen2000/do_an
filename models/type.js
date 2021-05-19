const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Type = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        maxlength: 20, 
        unique: true
    },
    active: {
        type: String,
        enum: ['active', 'inactive']
    },
    createdAt: String,
});

module.exports = mongoose.model('types', Type);