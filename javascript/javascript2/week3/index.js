//1-Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

setTimeout(function(){console.log("Called after 2.5 seconds")}, 2500);
 function logOutText(){
    setTimeout(function(){console.log("Called after 2.5 seconds")}, 2500);
  
}
logOutText();

//2-Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.

 function logOutAfterDelay(delay, stringToLog)
{
    const delayTime = 1000*delay;
    setTimeout(function(){ console.log(stringToLog)}, delayTime)
   
}
/* 3-Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: 
Called after 5 seconds 5 seconds after the button is clicked*/
logOutAfterDelay(2, "I am happy");

 const timer = function(){
    setTimeout(function(){console.log("Called after 5 seconds")}, 5000)
}
document.querySelector("#btn-1").addEventListener("click", timer);  

//4-Try call the third function once with the Earth function and once with the Saturn function.
const logEarth = function Earth(){
    console.log("Earth");
}
const logSaturn = function Saturn(){
    console.log("Saturn");
}

function planetLogFunction(planetLog){
    planetLog();
}
planetLogFunction(logEarth);
planetLogFunction(logSaturn); 

/*5-Create a button with the text called "Log location". 
When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api*/

function success(pos) {
    var crd = pos.coords;
    document.querySelector("#pos1").innerHTML = `This is latitude  :  ${crd.latitude}`
    document.querySelector("#pos2").innerHTML = `This is longitute : ${crd.longitude}`
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
function userLocation(){navigator.geolocation.getCurrentPosition(success, error);}

document.querySelector("#btn-2").addEventListener("click", userLocation);

/*7-Create a function called runAfterDelay. 
It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function.
Try and call this function with different delays and different callback functions*/
function abc(){
    console.log(`should logged after 2 second`);
}
function xyz(){
    console.log(`should logged after 3 second`);
}

function runAfterDelay(delay, callback){ 
    const timer = delay*1000; 
    setTimeout(callback, timer);
}
runAfterDelay(2, abc);
runAfterDelay(3, xyz); 
runAfterDelay(5, abc); 

/*8-Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. 
If a double click has been detected, log out the text: "double click!"*/

function clickInTime(e){
    console.log("double clicked");
}
document.querySelector("#btn-3").addEventListener("dblclick", clickInTime);

/*9-Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. 
If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.*/

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke )
{
  if (shouldTellFunnyJoke)
  {
      logFunnyJoke();
  } 
  else
  {
      logBadJoke();
  }
}
function funnyJoke(){
  console.log("Funny Jokes");
}
function badJoke(){
  console.log("bad Jokes");
}

function abc(){
  console.log(`should tell abc jokes`);
}
function xyz(){
  console.log(`should tell xyz jokes`);
}

jokeCreator(false, funnyJoke, badJoke);
jokeCreator(true, abc, xyz);


