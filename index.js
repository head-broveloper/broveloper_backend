'use strict';

const Hapi = require('@hapi/hapi');
const HapiSwagger = require('hapi-swagger');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const Routes = require('./routes/routes');
const Users = require('./routes/users');
const Pack = require('./package');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: '127.0.0.1'
    });

    server.route(Routes);
    server.route(Users);

    const swaggerOptions = {
        info: {
                title: 'broveloper API Documentation',
                version: Pack.version,
            },
        };
 
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);
 
    try {
        await server.start();
        console.log('Server running at:', server.info.uri);
    } catch(err) {
        console.log(err);
    }
};

process.on('unhandledRejection', (err) => {
console.log(err);
process.exit(1);
});

init();