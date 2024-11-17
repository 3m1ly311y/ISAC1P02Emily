var start = new Date()
var start = start.getTime();

function stopTime(){
    var stop = new Date()
  var stop = stop.getTime();

  var elapsed = stop.getMilliseconds()/600 - start.getMilliseconds()/600;

  var popUP = alert("You have been on this page for: " + elapsed + " seconds");
}
