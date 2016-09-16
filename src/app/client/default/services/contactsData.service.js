'use strict';

angular.module('app.default').factory('contactData', contactData);

function contactData() {
    var data = {};

    data = {
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

    return {
        data: data
    };
}