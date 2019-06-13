//backend

//frontend

$(document).ready(function() {

  $("#secret-form").submit(function(event) {
    event.preventDefault();
    var secretCapsule = $("#input-phrase").val();

    console.log(secretCapsule);

    var secretElements = secretCapsule.split("");
    console.log(secretElements);

  });


});
