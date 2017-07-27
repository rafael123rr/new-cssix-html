/* You will save your code during today's demos and exercises here. */
$(".frame").hide();
$(".frame").show();
//$("#android").fadeOut();


function fadePoster(){
  console.log("fade function called");
  $("#PEP").fadeToggle(1000);
}

function setup(){
  console.log("page is ready to go");
  $("#android").on("click", fadePoster);
}
$(document).ready(setup)
