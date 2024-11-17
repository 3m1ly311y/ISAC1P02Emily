var prompt = prompt ("What is your age?");
console.log(prompt);
var birthYear = getFullDate.getFullYear() - prompt;
var outPut = document.getElementsById("yearHere").innerHTML = birthYear;
