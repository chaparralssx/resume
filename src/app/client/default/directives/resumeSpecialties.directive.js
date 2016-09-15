// The module.directive API takes the normalized directive name followed by a factory function.
// This factory function should return an object with the different options to tell $compile
// how the directive should behave when matched.
angular.module('app.default').directive('resumeSpecialties', resumeSpecialties);

function resumeSpecialties() {
    return {
        restrict: 'E',
        replace: true, // Replace the directive element with the template HTML
        link: function(scope){
            scope.specialties = [
                {
                    name: 'Project Management'
                },
                {
                    name: 'Website and Application Development'
                },
                {
                    name: 'Business Analysis'
                },
                {
                    name: 'Growth Strategy'
                },
                {
                    name: 'Continuous Improvement'
                },
                {
                    name: 'Continuous Integration'
                },
                {
                    name: 'Continuous Delivery'
                },
                {
                    name: 'Agile'
                },
            ];
        },
        templateUrl: 'default/directives/resumeSpecialties.template.html'
    };
}