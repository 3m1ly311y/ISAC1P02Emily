var start = new Date();

function stopTime(){
var stop = new Date();

var elapsed = stop.getTime()/600 - start.getTime()/600;


var popUP = alert("You have been on this page for: " + elapsed + " seconds");
}
