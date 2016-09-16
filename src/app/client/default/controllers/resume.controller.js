'use strict';

angular.module('app.default').controller('ResumeController', ResumeController);

/**
 * Handles Resume page actions
 */
function ResumeController(contactData, summaryData, specialtiesData, experienceData) {
    var vm = this;
    vm.contact = contactData.data;
    vm.summary = summaryData.data;
    vm.specialties = specialtiesData.data;
    vm.experience = experienceData.data;
}