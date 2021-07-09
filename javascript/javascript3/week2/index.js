 //Movies exercise. 1- Create an array of bad movies.  2-Create an array of bad movies since year 2000
fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(data =>{
    const badMoviesArray = data.filter((movie) => movie.rating < 5)
    console.log(badMoviesArray);
    const ArrayOfbadMoviesOf2000 = badMoviesArray.filter((movie) => movie.year > 2000)
    console.log(ArrayOfbadMoviesOf2000);
});

//2-Promise that resolves after set time
function delayPromise(resolveAfter){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve()
        }, resolveAfter*1000)
    })
}
// uses the promise 
delayPromise(8).then(() => {
    console.log("I am called after 8 second asynchronously"); // logged out after 8 seconds
  });

//usses of promise using async/await 
async function usePromise(delay){
    const promise = await delayPromise(delay);
    console.log("I am called after 3 second asynchronously");
}
usePromise(3);

//3-write set time out promise
function setTimeoutPromise(timeout){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve();
        }, timeout)
    })
}
//uses the promise 
setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds");
  });
  
//consume promise by using async/await
async function consumeSetTimeoutPromise(delay){
    const promise = await setTimeoutPromise(delay)
    console.log("Called after 3 seconds");  
}
consumeSetTimeoutPromise(3000) 

//write a promise for current location

function getCurrentLocation(timeout) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) =>{
            if(position)
            {
                resolve(position);
            }
            else
            {
                 reject(error);
            }
        })
    });
};

//use the promise

 getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  }); 

  //consume promise by using async/await 

 async function renderCurrentLocation(){
    try{
        const location = await getCurrentLocation();
        console.log("current location by using async/await :", location);
    }
    catch(e){
        console.info(e)
    }
}
renderCurrentLocation(); 

//Fetching and waiting 
function getData(delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            fetch("http://api.open-notify.org/astros.json")
            .then((response)=> response.json())
            .then((astrosData)=> console.log(astrosData))       
        },delay*1000)
    })
}
getData(3);

//using async/await
function render3Steps(){
        setTimeout(async ()=>{
        const fetchData = await fetch("http://api.open-notify.org/astros.json");
        const response = await fetchData.json();
        console.log(response)
        },3000);
}
render3Steps(); 