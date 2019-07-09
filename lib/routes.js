'use strict';

module.exports = [
    {
        method: 'GET',
        path:'/',
        handler: (request, h) => {

            return 'Welcome to broveloper.com!';
        }
    },
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
        handler: (request, h) => {
            return "New user added!"
        }
    }
]