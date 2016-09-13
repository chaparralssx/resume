'use strict';

angular.module('app.default', ['app']).config(config);

/**
 * Configures the default module routing
 */
function config($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'default/views/home.view.html'
        });     
}