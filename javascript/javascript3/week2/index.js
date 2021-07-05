// async await
// yes or no from this api: https://yesno.wtf/api. log out the answer
/*  async function getYesOrNo() {
    
        const yesOrNoResponse = await fetch("https://yesno.wtf/api");
        const yesOrNo = await yesOrNoResponse.json();
        console.log(yesOrNo.answer);
}
getYesOrNo(); */


// fetch yes or no from this api: https://yesno.wtf/api. log out the answer

/*  fetch("https://yesno.wtf/api")
    .then((yesOrNoResponse) => yesOrNoResponse.json())
    .then((yesOrNo) => {
        console.log(yesOrNo.answer);
    })
    .catch((error) => console.log(error));      */ 





//Try fetching a url that rejects fx https://knajskdskj.jasdk. Log out the error message
  /*   fetch("https://knajskdskj.jasdk")
    .then((yesOrNoResponse) => yesOrNoResponse.json())
    .then((yesOrNo) => {
        console.log(yesOrNo.answer);
    })
    .catch((error) => console.log(error));  
 */

//Create a promise that resolves after 4 seconds. Use this promise to log out the text 'hello' after 4 seconds.

/* const HelloPromise = new Promise(resolve =>{
    setTimeout(()=>{
        resolve("hello after 4 second");
    },4000);
});
HelloPromise.then((data) =>{
    console.log(data);
})*/ 
 


//Now make the promise fail by rejecting it with an error message instead of resolving it, and log the error message to the console.
/* const myPromise = false;
const HelloPromise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        if(myPromise){

            resolve("hello after 4 second");
        }
        else
        {
            reject("sorry i dont know you")
        }
        
    },4000);
});
HelloPromise.then((data) =>{
    console.log(data);
})
.catch((error) =>{
    console.log(error);
}); 
 */
// getLoggedInUsers should wait 5 seconds before it resolves with the users! 
// Sometimes it should resolve and sometimes it should reject. 
// Look into Math.random

/* 
const myPromise = Math.floor(Math.random() * 2);
console.log(myPromise)

function getLoggedInUsers(){
    console.log("user info");
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(myPromise){

                resolve(["varsha","sanju","samasti","divyansh"]);
            }
            else
            {
                reject("sorry i did not find users");
            }
            
        },5000);
    });
} */
/* getLoggedInUsers()
    .then(users => {
        console.log(users); 
    }).catch(error => {
        console.log(error);
    }) */; 
//by using async function
/* 
async function renderLoggedInUserData(){  
    console.log('loading...')
    try{
        const users = await getLoggedInUsers();
        console.log(users);
    }catch(e){
        console.info(e)
    }finally{
        console.log('finished loading')

    }
}
renderLoggedInUserData()
     */

/* Using async await

Fetch the astronauts
After the astronauts has been fetched, fetch movies using this api
Log out the movies */

function fetchMovies(){
    console.log("before fetching movies");
    fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(data => data.json())
    .then(data => {
        console.log(data)
        });
}

function fetchAstronauts() {
    console.log("Before we fetch astronauts");
    return new Promise((resolve, reject) =>{
        let msg = "";
        fetch("http://api.open-notify.org/astros.json")
        .then(data =>data.json())
        .then(data => {
            console.log(data.message)
            msg= data.message});

        setTimeout(()=>{
            
            if(msg === "success"){

                resolve(fetchMovies());
            }
            else
            {
                reject("Error occured fetching astronaut, so we are not going to fetch any movies");
            }
            
        },1000);
    });
}

async function renderLogOutMovieData(){
    try {
        const movieResponse = await fetchAstronauts()
        
    }catch(e){
        console.log(e)
    }
}




/*     try{
        const astronautsResponse = await fetch("http://api.open-notify.org/astros.json");
        console.log("This is logged out after some time, even though the code looks synchronous!");
        const astronauts = await astronautsResponse.json();
        const movieResponse = await fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json");
        console.log("This is logged out after some time!");
        const Movies = await movieResponse.json();
        console.log(Movies);
    }catch(e){
        console.info(e)
    }finally{
        console.log("finished loading");
    }
  
} */


renderLogOutMovieData();