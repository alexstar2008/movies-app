'use strict';
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    Id: 'ObjectId',
    name: {
        type: String,
        required: true
    },
    year: Number,
    format: {
        type: String
    },
    actors: [String]
}, { timestamps: true });

module.exports = mongoose.model('movie', movieSchema);