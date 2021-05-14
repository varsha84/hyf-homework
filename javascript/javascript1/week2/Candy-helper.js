let boughtCandyPrices = [];
let amountToSpend = Math.random() * 100;
console.log(`you can spend ${amountToSpend} on candies`)

function addCandy(candyType, weight)
{
    if (candyType === "Sweet")
    {
        boughtCandyPrices.push(weight*0.5);
    }
    else if (candyType === "Chocolate")
    {
        boughtCandyPrices.push(weight*0.7);
    }
    else if (candyType === "Toffee")
    {
        boughtCandyPrices.push(weight*1.1);
    }
    else if (candyType === "Chewing-gum")
    {
        boughtCandyPrices.push(weight*0.03);
    }
}

addCandy("Sweet", 20);
addCandy("Chocolate", 30);
addCandy("Toffee", 10);
addCandy("Chewing-gum", 10);

console.log(boughtCandyPrices);

function canBuyMoreCandy(amountToSpend)
{
    let totalAmount = 0;
    for(let i = 0; i < boughtCandyPrices.length; i++)
    {
        totalAmount = totalAmount + boughtCandyPrices[i]
    }
    return totalAmount;
}
let totalAmount = canBuyMoreCandy(amountToSpend);

if(totalAmount < amountToSpend)
{
    console.log(`you still have money. You can buy more, so please do!`);
}
else
{
    console.log(`you spent enough money. Enough candy for you!`);
}
