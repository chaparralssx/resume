'use strict';

angular.module('app.default').factory('volunteerData', volunteerData);

function volunteerData() {
    var data = [
        {
            organization: 'Emergent Technology Center',
            role: 'Founder',
            city: 'Fond du Lac',
            state: 'WI',
            start: 'April 2014',
            end: 'January 2015',
            cause: 'Technology Entreprenuership',
            description: '<p>Seed Accelerated Technical Entrepreneurship, Apprenticeship & Training Labs.</p><p>Emergent Labs accelerates innovation in emerging technical fields through entrepreneurship and technical training programs.</p>'
        },
        {
            organization: 'Forward Fond du Lac',
            role: 'Committee Member',
            city: 'Fond du Lac',
            state: 'WI',
            start: 'March 2014',
            end: 'January 2015',
            cause: '',
            description: ''
        },
        {
            organization: 'Leadership Fond du Lac Alumni Board',
            role: 'Co-Chair, Board Member',
            city: 'Fond du Lac',
            state: 'WI',
            start: 'January 2012',
            end: 'May 2014',
            cause: 'Community Leadership',
            description: ''
        },
        {
            organization: 'Young Professionals of Fond du Lac',
            role: 'Marketing Committee, Member',
            city: 'Fond du Lac',
            state: 'WI',
            start: '2008',
            end: 'May 2014',
            cause: '',
            description: ''
        },
        {
            organization: 'Habitat for Humanity of Fond du Lac County',
            role: 'Secretary, Board Member',
            city: 'Fond du Lac',
            state: 'WI',
            start: 'September 2007',
            end: 'June 2009',
            cause: '',
            description: ''
        },
        {
            organization: 'Cheers for Volunteers',
            role: 'Steering Committee, Event Emcee, Webmaster',
            city: 'Fond du Lac',
            state: 'WI',
            start: '2002',
            end: '2013',
            cause: 'Volunteer Recognition',
            description: ''
        }
    ];

    return {
        data: data
    };
}