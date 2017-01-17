$(document).ready(function(){
$("form#transportation_survey").submit(function(event){
  event.preventDefault();
  $("#work-responses").show();
  $("input:checkbox[name=work-transportation]:checked").each(function(){
    var workTransportMode = $(this).val();
    var capitalWorkTransportationMode = workTransportMode.toUpperCase();
    $("#work-responses").append(capitalWorkTransportationMode + "<br>");
   });
  $("#fun-responses").show();
  $("input:checkbox[name=fun-transportation]:checked").each(function(){
    var funTransportationMode = $(this).val();
    var capitalFunTransportationMode = funTransportationMode.toUpperCase();
    $("#fun-responses").append(capitalFunTransportationMode + "<br>");

  });
  $("#transportation_survey").hide();
});

});
