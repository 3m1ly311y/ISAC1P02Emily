
var  start = new Date()

var startTime = start.getTime();




function stopTime(){
  var stop = new Date()
  var stopTime = stop.getTime();
  var elapsed = stop.getTime() - start.getTime();

  console.log(stop);
  var popUP = alert("You have been on this page for: " + elapsed + " seconds");
}
