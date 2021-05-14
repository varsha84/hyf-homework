console.log("I love pizza");
let pizzaName = "chicken-pizza";
let pizzaPrice = 10;
let noOfPizza = 2;
let familySize = true;
let totalPrice;

if (familySize) 
{
    totalPrice= pizzaPrice*2*noOfPizza;
}
else
{
    totalPrice= pizzaPrice*noOfPizza;
}

let size = familySize? 'Family Size' : 'Normal Size'
console.log(`New pizza order: ${noOfPizza} of  ${size} ${pizzaName}. Total cost for the order is: ${totalPrice}`);
