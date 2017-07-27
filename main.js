// console.log("hello world");
// function checkout(item1,item2,coupon,tax){
//   var subtotal = item1 + item2 ;
//   var subtraction = subtotal * coupon;
//   var unfortunate = subtotal * tax;
//   var grandTotal = subtotal - coupon + unfortunate;
//   console.log(grandTotal);
// }
//
// checkout(20,30,.15,.0000010);
//
// var elevatorLine = [1,2,3];
//
// var pressFloorNumber = function(newFloor){
//       elevatorLine.push(newFloor);
// }
//
// var goToNextFloor = function(){
//   if (elevatorLine.length > 0){
//     console.log("Floor" + elevatorLine[0]);
//     elevatorLine.splice(0,1);
//     return elevatorLine
// }else {
//   console.log('The line is currrently empty')
// }
//
// }
//
//var currentLine = function(elevatorLine){
//
//       console.log("The line order is currently Floor: " + elevatorLine);
//
// }
//
// pressFloorNumber(7);
// goToNextFloor();
// currentLine(elevatorLine);



function myGreeting() {
  console.log("button was clikced");
  var userName = $('#username').val();
  console.log(userName);
  var userAge = $('#userage').val();
  console.log(userAge);
  $('#pink-heading').text("Welcome, " + userName);
}

function setup(){
  console.log("page is ready");
$("#submitButton").click(myGreeting)

}




$(document).ready(setup);
