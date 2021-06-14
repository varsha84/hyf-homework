 // Here we create a funtion that as a parameter takes a function!! Super weird right!? 
// Functions works just like any other type in js. 
/* function functionRunner(functionToRun) {
    console.log(typeof functionToRun);
    // Here we are calling the function that is provided as an argument when calling functionRunner
    functionToRun();
  }
  
  functionRunner(function() {
    console.log('hello');
  });
  
  // We dont see anything, why??
  functionRunner(Math.random);
  
  // Lets rewrite functionRunner to log out the return of a function 
  function functionRunnerImproved(functionToRun) {
    console.log(typeof functionToRun);
    // Here we are calling the function that is provided as an argument when calling functionRunner
    const capturedReturnValue = functionToRun();;
    console.log(capturedReturnValue);
  }
  
  functionRunnerImproved(Math.random);  */


 //Click counter  

/* let count = 0; 
const myActionfunction = function(){
    console.log("logout",count);
    count++;
}

document.querySelector("#click1").addEventListener("click", myActionfunction);
document.querySelector("#click2").addEventListener("click", myActionfunction)   */

 //Delay clicker
/* const timer = () =>{
    setTimeout(() => {
        console.log("this statement was logged after 3 second in the working");
    }
,3000);
}; 
document.querySelector("#click3").addEventListener("click", timer);  */

 //Delay clicker
const delayMsg = setTimeout(function(){
    console.log( "This text was delayed by 3 seconds");
}, 3000);

document.querySelector("#click3").addEventListener("click", delayMsg);   

//delay clicker

const delayMsg = function() { 
    setTimeout(function(){
    console.log( "This text was delayed by 3 seconds");
}, 3000);
};
document.querySelector("#click3").addEventListener("click", delayMsg);   
/* //Page onload
 const callback = function(){
    console.log("DOM fully loaded and parsed");
}

window.addEventListener('load', callback); */



//Mouse position

/* const callback = function(e){ 
    console.log(e); 
    console.log(`x and y cordinate of a mouse event : ${e.clientX}, ${e.clientY}`);  
}
//window.addEventListener("click", callback); 
document.addEventListener("click", callback); */

//Lets create some js that will get the average x and y position of a user after 30 seconds.

/* let xCordinate = [];
let yCordinate = [];

const callback = function(e){
    console.log(`x and y cordinate of mouse event: ${e.clientX}, ${e.clientY}`);
    xCordinate.push(e.clientX);
    yCordinate.push(e.clientY);

}
window.addEventListener("click", callback)
function calAverage()
{
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const initialValue = 0;
    const totalXcordinate = xCordinate.reduce(reducer, initialValue);
    const aveXCordinate = totalXcordinate/xCordinate.length;

    const totalYcordinate = yCordinate.reduce(reducer, initialValue);
    const aveyCordinate = totalYcordinate/yCordinate.length;
    console.log(`average of x and y cordinate of mouse event after 30 second : ${aveXCordinate}, ${aveyCordinate}`);
}
setTimeout(calAverage, 5000);  */
/* 
let xArr = [];
let yArr = [];
document.addEventListener("mouseover", (event)=>{
    let x = event.clientX;
    let y = event.clientY;
    let cordinate = "x coordinate is" + x + ",y cordinate i" + y;
    document.getElementById("mouse").innerHTML = coordinates;
    xArr.push(x);
    yArr.push(y);
    console.log(a
})
const timer = () =>{
    setInterval(() => {
        
    }, (interval));
} */

//example for setTimOut
/* const abc = function ()
{
    console.log("ABC")
    return 1;
}

abc()


const delayMsg = function() { 
    setTimeout(abc, 3000);
};

document.querySelector("#click3").addEventListener("click", function(){
    setTimeout(abc(), 1000)
});  */

//Simon solution
/*
window.addEventListener(‘DOMContentLoaded’, callback());
let xArr =[]
let yArr =[]
document.addEventListener(“mousemove”, (event) => {
let x = event.clientX;
  let y = event.clientY;
  let coordinates = “X coordinates is ” + x + “, Y coordinates is ” + y;
  document.getElementById(“mouse”).innerHTML = coordinates;
    xArr.push(x);
    yArr.push(y);
  });
function avgCoordinates(intArray){
    function reduceArr(){
         const reduceReturn = intArray.reduce((a,b)=>a+b)/intArray.length;
        console.log(reduceReturn);
        return reduceReturn;
        }
return reduceArr;
}
setInterval(avgCoordinates(xArr), 30000)
setInterval(avgCoordinates(yArr), 30000)*/