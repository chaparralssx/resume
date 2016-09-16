'use strict';

angular.module('app.default').factory('educationData', educationData);

function educationData() {
    var data = [
        {
            institution: 'Georgia Institute of Technology - Georgia Tech College of Management',
            city: 'Atlanta',
            state: 'GA',
            start: '2009',
            end: '2011',
            fields: [
                'Operations',
                'Technology Commercialization'
            ],
            degree: 'Masters Business Administration (MBA)',
            gpa: '',
            activities: 'Yellow Jacket Flying Club',
            description: '• Contributed material to and reviewed "Strategic Management" textbook by Dr. Frank T. Rothaermel<br>• Merit based full scholarship in the College of Management<br>• Merit based fellowship in the College of Management – TI:GER Program (a highly selective two-year interdisciplinary entrepreneurship and technology commercialization program)<br>• GMAT: 690 (90th percentile)'
        },
        {
            institution: 'Moraine Park Technical College',
            city: 'Fond du Lac',
            state: 'WI',
            start: '2006',
            end: '2006',
            fields: [
                'Human Resources',
                'Insurance'
            ],
            degree: '',
            gpa: '4.0',
            activities: '',
            description: '• Compensation &amp; Benefits'
        },
        {
            institution: 'Fox Valley Technical College',
            city: 'Appleton',
            state: 'WI',
            start: '2005',
            end: '2006',
            fields: [
                'Human Resources Management',
                'Web Development',
                'Scripting Languages'
            ],
            degree: '',
            gpa: '',
            activities: '',
            description: ''
        },
        {
            institution: 'Principia College',
            city: 'Elsah',
            state: 'IL',
            start: '1995',
            end: '1999',
            fields: [

            ],
            degree: 'Bachelor of Arts',
            gpa: '',
            activities: '',
            description: ''
        }
    ];

    return {
        data: data
    };
}