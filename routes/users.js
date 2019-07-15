'use strict';
const Joi = require('@hapi/joi');
const Controller = require('../controllers/users');

module.exports = [
    {
        method: 'GET',
        path: '/getuser',
        options: {
            handler: Controller.GetUser,
            description: 'Get A User',
            notes: "Returns user's info",
            tags: ['api', 'users'],
            validate: {
                query: {
                    password: Joi.string().required(),
                    user_name: Joi.string().required()
                }
            }
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
                    user_name: Joi.string().required()
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/listusers',
        options: {
            handler: Controller.ListUsers,
            description: 'Get A User',
            notes: "Returns all users",
            tags: ['api', 'users'],
            validate: {
                query: {
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/deleteuser',
        options: {
            handler: Controller.DeleteUser,
            description: 'Delete A User',
            notes: "Returns 'deleted user'",
            tags: ['api', 'users'],
            validate: {
                payload: {
                    user_id: Joi.string().required()
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/updateuser',
        options: {
            handler: Controller.UpdateUser,
            description: 'Update A User',
            notes: "Returns user's ID",
            tags: ['api', 'users'],
            validate: {
                payload: {
                    user_id: Joi.string().required(),
                    first_name: Joi.string().required(),
                    last_name: Joi.string().required(),
                    email: Joi.string().email().required(),
                    phone_number: Joi.string().required(),
                    password: Joi.string().required(),
                    user_name: Joi.string().required()
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/finduser',
        options: {
            handler: Controller.FindUser,
            description: 'Find A User',
            notes: "Returns user",
            tags: ['api', 'users'],
            validate: {
                payload: {
                    user_id: Joi.string(),
                    first_name: Joi.string(),
                    last_name: Joi.string(),
                    email: Joi.string().email(),
                    phone_number: Joi.string(),
                    password: Joi.string(),
                    user_name: Joi.string()
                }
            }
        }
    },
]