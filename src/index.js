const Hapi = require('hapi');           // A rich framework for building applications and services
const config = require('./config');     // Application configuration
// const monitor = require('./monitor');   // Monitoring, logging (Not set up for this boilerplate)
// const auth = require('./auth');         // Authentication (Not set up for this boilerplate)
// const rewrite = require('./rewrite');   // Url rewrite/redirects (Included but not used in this boilerplate)
// const api = require('./api');           // REST API (Not set up for this boilerplate)
const app = require('./app');           // Website

// Build the server
const server = new Hapi.Server();
server.connection(config.server.connection);
server.settings.app = config;

// Register our plugins and kick off the server
// const plugins = [rewrite, app, api];
const plugins = [app];
server.register(plugins, err => {
    if (err) {
        throw err;
    }

    // Engage	
    server.start(err => {
        if (err) {
            throw err;
        }

        console.log('[hapi]', `server running at: ${server.info.uri}`);
    });
});
