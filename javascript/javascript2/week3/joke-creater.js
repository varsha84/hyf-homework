//Function as a variable
//1-Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
const coke = function(){
    console.log("you should drink coke");
}
const fanta = function(){
    console.log("you should drink fanta");
}
const pepsi = function(){
    console.log("you should drink pepsi");
}
const maza = function(){
    console.log("you should drink maza");
}

const funArray = [coke, fanta, pepsi, maza];   

for(i=0; i < funArray.length; i++)
{
    console.log(funArray[i]());
}
//2-Create a function as a const and try creating a function normally. Call both functions. Read up on this if you are interested:
const constFunction = function(){
    console.log("this is my const function");
}
function myFunction(){
    console.log("this is my function");
}
constFunction();
myFunction();

//3-Create an object that has a key whose value is a function. Try calling this function.

const objArray = [{name : coke}, {name : fanta}, {name : pepsi}, {name : maza}];   

for(i=0; i < objArray.length; i++)
{
    console.log(objArray[i].name());
}

