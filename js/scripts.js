//backend

//frontend

$(document).ready(function() {

  $("#secret-form").submit(function(event) {
    event.preventDefault();
    var secretCapsule = $("#input-phrase").val();

    console.log(secretCapsule);

    var secretElements = secretCapsule.split("");
    console.log(secretElements);
    var outputArray = [];
    secretElements.forEach(function(secretElement){
      var letters = ["a", "b", "c", "d","e"];
      letters.forEach(function(letter){
        if (letter === secretElement) {
          outputArray.push(secretElement);
        }
      });

    });
    console.log(outputArray);
    // $("#input-phase").text(str.replace(/\s/g, ''));
    for (var i=0; i < secretElements.length; i++) {

    }
    });


});
