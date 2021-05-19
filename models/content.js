const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Content = new Schema({
    title: {
        type: String,
        required: [true, "title is required!"],
        maxlength: 150,
    },
    typeNew: {
        type: String,
        required: [true, 'typeNew is required'],
    },
    detail: {
        type: String,
        required: [true, "detail is required!"],
        maxlength: 300,
    },
    content: {
        type: String,
        required: [true, "content is required!"],
    },
    contentMore: {
        type: String,
    },
    active: {
        type: String,
        enum: ['active', 'inactive']
    },
    imageShow: String,
    imageContent: String,
    createdAt: String,
    updateDAt: String,
    createdBy: String,
    updatedBy: String
});

module.exports = mongoose.model('contents', Content);