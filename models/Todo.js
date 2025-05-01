const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true, 
        maxLength: 100
    },
    Description: { 
        type: String,
        required: true,
        maxLength: 100
    },
    createdAt: { 
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Todo', TodoSchema);
