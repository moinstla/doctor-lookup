var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(medicalIssue, firstName, lastName) {
    $('.showDoctors').append("<li>" + firstName + " " + lastName + "</li>");
};

$(document).ready(function() {
  var doctorObject = new Doctor();
  $('#submit-issue').click(function() {
    $( ".showDoctors" ).empty();
    var medicalIssue = $('#issue').val();
    $('#issue').val("");
    doctorObject.getDoctor(medicalIssue, displayDoctor);
  });
});
