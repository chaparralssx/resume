// The module.directive API takes the normalized directive name followed by a factory function.
// This factory function should return an object with the different options to tell $compile
// how the directive should behave when matched.
angular.module('app.default').directive('resumeSummary', resumeSummary);

function resumeSummary() {
    return {
        restrict: 'E',
        replace: true, // Replace the directive element with the template HTML
        scope: {
            summary: '='
        },
        templateUrl: 'default/directives/resumeSummary.template.html'
    };
}