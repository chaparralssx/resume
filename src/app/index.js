'use strict';

const Path = require('path');

// HTML rendering engine
const vision = require('vision');

/**
 * Assets/CDN configuration
 */
var assets = {
    register: require('../assets')
};

/**
 * Theme configuration
 */
var themes = {
    register: require('hapi-themes'),
    options: {
        configFilePath: 'src/assets/**/*.theme.json'
    }
};

/**
 * Registers the server side routes for the application
 */
function register(server, options, next) {

    const plugins = [vision, assets, themes];
    server.register(plugins, () => {

        // Register index route
        // e.g. http://localhost:3100/
        server.route({
            method: 'GET',
            path: '/',
            handler: {
                theme: {
                    template: 'index',
                    layout: 'default',
                    relativeTo: Path.join(__dirname, 'server/views'),
                    model: {
                        appSettings: server.settings.app,
                        clientSettings: JSON.stringify(server.settings.app.clientSettings)
                    }
                }
            }
        });

        // Register subsite
        // e.g. http://localhost:3100/subsite
        server.route({
            method: 'GET',
            path: '/subsite',
            handler: {
                theme: {
                    template: 'subsite',
                    layout: 'subsite',
                    relativeTo: Path.join(__dirname, 'server/views'),
                    model: {
                        appSettings: server.settings.app,
                        clientSettings: JSON.stringify(server.settings.app.clientSettings)
                    },

                    // NOTE: We had to override the theming system for subsite
                    // temporarily until a decision is made on design
                    // TODO: Remove this when default and subsite designs are in sync
                    overrideTheme: {
                        key: 'subsite',
                        isDefault: false,
                        brandName: 'Subsite Brand Name',
                        logo: 'logo-subsite.png',
                        logoAltText: 'Subsite',
                        favicon: 'icon-subsite.png',
                        url: 'http://www.someotherurl.com/' // Where the logo links to
                    }
                }
            }
        });

        // catch-all route, will serve a 404 page
        server.route({
            method: 'GET',
            path: '/{path*}',
            handler: {
                theme: {
                    layout: 'default',
                    template: '404',
                    relativeTo: Path.join(__dirname, 'server/views')
                }
            }
        });

        // configure server side rendering engine (vision+handlebars)
        server.views({
            engines: {
                html: require('handlebars')
            },
            relativeTo: server.settings.app.server.staticContentPath,
            layout: 'default',
            layoutPath: 'layouts',
            partialsPath: './',
            isCached: server.settings.app.server.enableCache
        });

        return next();
    });
}

exports.register = register;
exports.register.attributes = {
    pkg: {
        name: 'resume',
        version: '1.0.0'
    }
};