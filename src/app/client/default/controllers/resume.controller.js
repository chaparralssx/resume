'use strict';

angular.module('app.default').controller('ResumeController', ResumeController);

/**
 * Handles Resume page actions
 */
function ResumeController($sce, contactData, summaryData, specialtiesData, experienceData, educationData, volunteerData) {
    var vm = this;
    vm.contact = contactData.data;
    vm.summary = summaryData.data;
    vm.specialties = specialtiesData.data;
    vm.experience = experienceData.data;
    vm.education = educationData.data;
    vm.volunteer = volunteerData.data;
}