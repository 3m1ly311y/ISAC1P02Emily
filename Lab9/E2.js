var prompt = prompt("What is your age?");
console.log(prompt);
var todayYear = getFullDate.getFullYear();
var birthYear = getFullDate - prompt;
var outPut = document.getElementsById("yearHere").innerHTML = birthYear;
