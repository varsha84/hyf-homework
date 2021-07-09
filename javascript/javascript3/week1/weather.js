function callback(){
    let city = document.getElementById("city").value;
    if(!city)
    {
        alert(`please enter city name`);
    }
    else{
        getWeatherByCity(city);
    }
}

//weather by city
function getWeatherByCity(city){
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=be7869551e6a5bea8c27f3422a6ed231`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        renderWeatherData(data)
    });

}
// show location 
function getWeatherByCordinate(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=be7869551e6a5bea8c27f3422a6ed231`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        renderWeatherData(data)
    }); 
}


function renderWeatherData(data){
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("temp").innerHTML = `${data.main.temp} ° C`  
    document.getElementById("speed").innerHTML = `wind ${data.wind.speed} m/s`;
    document.getElementById("main").innerHTML = data.weather[0].main;
    document.getElementById("icon").setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`)
    const sunrise = data.sys.sunrise;
    const timeSunrise = new Date(sunrise * 1000).toLocaleTimeString();
    document.getElementById("sys").innerHTML = `${timeSunrise} sunrise`;
    const sunset = data.sys.sunset;
    const timeSunset = new Date(sunset * 1000).toLocaleTimeString();
    document.getElementById("sys2").innerHTML = `${timeSunset} sunset`;    
    saveCurrentLocation(data.name);
}
const button = document.getElementById("btn");
button.addEventListener("click", callback);

// find location 
/* The chosen city
Temperature
Icon for the weather type
Wind speed
How clowdy it is
When sunrise and sunset is
Optional a map showing where the city is located */

function geoFindMe(){
  if("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(position =>{
          console.log(position);
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          getWeatherByCordinate(lat, lon); 
          document.getElementById("status").innerHTML = `Latitude: ${lat} °, Longitude: ${lon} °`;
      })}
      else
      {
          console.log("geolocation not available");
      }
  }
document.querySelector('#find-me').addEventListener('click', geoFindMe);

//save current location in local storage
function saveCurrentLocation(value){
    localStorage.setItem('myCity', value);

}
const city = localStorage.getItem("myCity")
if(city)
{
    getWeatherByCity(city)
}
else{
    geoFindMe();
}

