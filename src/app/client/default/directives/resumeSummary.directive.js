// The module.directive API takes the normalized directive name followed by a factory function.
// This factory function should return an object with the different options to tell $compile
// how the directive should behave when matched.
angular.module('app.default').directive('resumeSummary', resumeSummary);

function resumeSummary() {
    return {
        restrict: 'E',
        replace: true, // Replace the directive element with the template HTML
        link: function(scope){
            scope.summary = {
                text: 'Project Manager, Frontend Developer, Business/Systems Analyst, and respected team leader with a keenness for Agile, Six Sigma and Lean methodologies. MBA with fifteen years IT management and development experience.  Driven to continually improve systems in the workplace, and uniquely qualified with both IT experience and business acumen.'
            };
        },
        templateUrl: 'default/directives/resumeSummary.template.html'
    };
}