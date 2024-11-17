var start = new Date();

function stopTime(){
var stop = new Date();

var elapsed = start.getTime() - stop.getTime();

var popUP = alert("You have been on this page for: " + elapsed + " seconds");
}
