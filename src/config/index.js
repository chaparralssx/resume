const extend = require('extend');
const Path = require('path');

/**
 * Configuration for all environments
 */
const config = {

    // base configuration (localhost/development)
    defaults: {
        debug: true,

        // server configuration 
        server: {
            enableCache: false,
            staticContentPath: 'public',
            connection: {
                address: process.env.OPENSHIFT_NODEJS_IP,
                port: process.env.OPENSHIFT_NODEJS_PORT || 3100,
                router: {
                    stripTrailingSlash: true
                },
                routes: {
                    files: {
                        // serves static content files from this directory
                        relativeTo: Path.join(process.cwd(), 'public')
                    }
                }
            }
        },

        // configure external services
        services: {
            gateway: {
                host: 'https://somedomain.com:8443',
                service1: '/api/accounts/v1.0/service1'
            }
        },

        // client settings are available in angularjs code
        // take caution as these settings are exposed to the client
        clientSettings: {
            cacheKeys: {
                lookupCache: 'lookupCache'
            }
        }
    },

    // environment overrides
    env: {
        test: {
            debug: false,
            server: {
                enableCache: true
            }
        },
        stage: {
            debug: false,
            server: {
                enableCache: true
            }
        },
        prod: {
            debug: false,
            server: {
                enableCache: true
            },
            services: {
                gateway: {
                    host: 'https://somedomain.com:8443',
                    service1: '/api/accounts/v1.0/service1'
                }
            },
            clientSettings: {
            }
        }
    }
};

// export the configuration by environment
module.exports = extend(true, config.defaults, config.env[process.env.NODE_ENV]);