'use strict';

angular.module('app.default').controller('HomeController', HomeController);

/**
 * Handles Home page actions
 */
function HomeController(experienceData) {
    var vm = this;

    vm.experiences = experienceData.data;
}