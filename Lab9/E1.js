
var start = start.getMilliseconds();

function stopTime(){
  var stop = stop.getMilliseconds();
  var start = start.getTime();
  var elapsed = stop.getMilliseconds()/600 - start.getMilliseconds()/600;

  var popUP = alert("You have been on this page for: " + elapsed + " seconds");
}
