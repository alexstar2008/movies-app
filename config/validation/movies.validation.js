'use strict';
const Joi = require('joi');

module.exports = {
    addMovie: {
        body: {
            name: Joi.string().required().max(200),
            year: Joi.number().required(),
            format: Joi.string().max(20),
            actors: [Joi.string()]
        }
    },
    removeMovie: {
        params: {
            id: Joi.string().required()
        }
    }
};