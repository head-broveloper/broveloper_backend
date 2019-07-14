'use strict';
const Joi = require('@hapi/joi');
const Controller = require('../controllers/users');

module.exports = [
    {
        method: 'GET',
        path: '/login',
        handler: (request, h) => {
            return "You're logged in!"
        }
    },
    {
        method: 'POST',
        path: '/adduser',
        options: {
            handler: Controller.AddUser,
            description: 'Add A User',
            notes: "Returns user's ID",
            tags: ['api', 'users'],
            validate: {
                payload: {
                    first_name: Joi.string().required(),
                    last_name: Joi.string().required(),
                    email: Joi.string().email().required(),
                    phone_number: Joi.string().required(),
                    password: Joi.string().required(),
                    user_name: Joi.string().required(),
                }
            }
        }
    }
]