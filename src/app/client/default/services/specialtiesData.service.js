'use strict';

angular.module('app.default').factory('specialtiesData', specialtiesData);

function specialtiesData() {
    var data = [
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
        }
    ];

    return {
        data: data
    };
}