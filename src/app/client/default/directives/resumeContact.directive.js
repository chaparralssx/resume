// The module.directive API takes the normalized directive name followed by a factory function.
// This factory function should return an object with the different options to tell $compile
// how the directive should behave when matched.
angular.module('app.default').directive('resumeContact', resumeContact);

function resumeContact() {
    return {
        restrict: 'E',
        replace: true, // Replace the directive element with the template HTML
        link: function(scope){
            scope.me = {
                firstName: 'R.',
                middleName: 'Scott',
                lastName: 'Blamey',
                email: 'rscott@theblameys.net',
                jobtitle: 'Project Manager, Business/Systems Analyst, Developer',
                image: '',
                streetAddress: 'N7787 Ledgeview Springs Dr.',
                addressLocality: 'Fond du Lac',
                addressRegion: 'WI',
                postalCode: '54937',
                telephone: '(920) 251-9378',
                url: 'rscott.theblameys.net'
            };
        },
        templateUrl: 'default/directives/resumeContact.template.html'
    };
}