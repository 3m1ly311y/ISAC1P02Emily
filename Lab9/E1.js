
var start = start.getTime();

function stopTime(){
  var stop = stop.getTime();

  var elapsed = stop.getMilliseconds()/600 - start.getMilliseconds()/600;

  var popUP = alert("You have been on this page for: " + elapsed + " seconds");
}
