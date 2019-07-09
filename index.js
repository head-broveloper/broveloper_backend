'use strict';

const Hapi = require('@hapi/hapi');
const Routes = require('./lib/routes');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: '127.0.0.1'
    });

    server.route(Routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
console.log(err);
process.exit(1);
});

init();