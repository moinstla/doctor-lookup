var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(medicalIssue, img, firstName, lastName, title, bio) {
    $('.showDoctors').append('<li><img src="' + img + '"><br><h4>'+ firstName + " " + lastName + "," + title + "</h4>" + bio + "</li><br><hr>");
};

$(document).ready(function() {
  var doctorObject = new Doctor();
  $('#submit-issue').click(function() {
    $(".showDoctors" ).empty();
    var medicalIssue = $('#issue').val();
    $('#issue').val("");
    doctorObject.getDoctor(medicalIssue, displayDoctor);
  });
});
