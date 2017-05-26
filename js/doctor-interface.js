var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(doctors) {
  $('.showDoctors').empty();
  doctors.forEach(function(doctor){
    $(doctors).append("<li> ${doctor.name} </li>");
  });
};

$(document).ready(function() {
  var doctorObject = new Doctor();
  $('.doctor-form').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('.issue').val();
    $('.issue').val("");
    doctorObject.getDoctor(medicalIssue, displayDoctor);
  });

});
