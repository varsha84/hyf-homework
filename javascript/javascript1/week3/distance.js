//When will we be there??
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};
  
function calTime(travelInformation)
{
    const hours = Math.trunc(travelInformation.destinationDistance / travelInformation.speed);
    const mins = travelInformation.destinationDistance % travelInformation.speed;
    return {hours, mins};
}
const travelTime  = calTime(travelInformation);
console.log(`Total travel time is :${travelTime[0].hours} hours and ${travelTime[1].mins} minutes`);
