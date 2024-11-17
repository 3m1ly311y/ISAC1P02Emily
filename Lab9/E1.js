var start = new Date()
var start = start.getTime();

function stopTime(){
    var stop = new Date()
  var stop = stop.getTime();

  var elapsed = stop.getTime()/600 - start.getTime()/600;

  var popUP = alert("You have been on this page for: " + elapsed + " seconds");
}
