'use strict';

angular.module('app.default').factory('summaryData', summaryData);

function summaryData() {
    var data = {};

    data = {
        description: 'Project Manager, Frontend Developer, Business/Systems Analyst, and respected team leader with a keenness for Agile, Six Sigma and Lean methodologies. MBA with fifteen years IT management and development experience.  Driven to continually improve systems in the workplace, and uniquely qualified with both IT experience and business acumen.'
    };

    return {
        data: data
    };
}