//When will we be there??
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  function calTime(travelInformation)
  {
      let time = (travelInformation.destinationDistance)/(travelInformation.speed);
      let hour = Math.trunc(time);
      let min = (travelInformation.destinationDistance)%(travelInformation.speed);
      return {hour, min};
  }
  const travelTime  = calTime(travelInformation);
  console.log(`Total travel time is :${travelTime.hour} hours and ${travelTime.min} minutes`);
 