'use strict';

module.exports = [
    {
        method: 'GET',
        path:'/',
        handler: (request, h) => {

            return 'Welcome to broveloper.com!';
        }
    }
]