//calculate house price
let peter = {
    depth:10,
    width:8,
    height:10,
    areaOfGarden:100
};
let julia = {
    depth:11,
    width:5,
    height:8,
    areaOfGarden:70  
};

function calHousePrice(houseInfo)
{ 
    return (houseInfo.width * houseInfo.height * houseInfo.depth) * 2.5 * 1000 + (houseInfo.areaOfGarden * 300);
}

let costOfPeterHouse = calHousePrice(peter);
console.log(`cost of Peter house is =  ${costOfPeterHouse}`);

let costOfJuliaHouse = calHousePrice(julia);
console.log(`cost of Julia house is =  ${costOfJuliaHouse}`);

if(costOfPeterHouse>costOfJuliaHouse)
{
    console.log(`Peter is paying too much than julia`);
}
else
{
    console.log(`julia is paying too much than peter`);
}
