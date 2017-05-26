var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(doctors) {
  $('showDoctors').empty();
  doctors.forEach(function(doctor){
    $(".showDoctors").append("<li> ${doctor.name} </li>");
  });
};

$(document).ready(function() {
  var doctorObject = new Doctor();
  $('medical issue').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('.issue').val();
    doctorObject = getDoctor(medicalIssue);
  });

});
