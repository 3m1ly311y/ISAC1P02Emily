
var  start = new Date()

var startTime = start.getMilliseconds();




function stopTime(){
  var stop = new Date()
  var stopTime = stop.getMilliseconds();
  var elapsed = stop.getMilliseconds() - start.getMilliseconds();

  console.log(stop);
  var popUP = alert("You have been on this page for: " + elapsed + " seconds");
}
