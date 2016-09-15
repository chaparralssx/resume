'use strict';

angular.module('app.default', ['app']).config(config);

/**
 * Configures the default module routing
 */
function config($stateProvider) {
    $stateProvider
        .state('resume', {
            url: '/',
            templateUrl: 'default/views/resume.view.html'
        });     
}