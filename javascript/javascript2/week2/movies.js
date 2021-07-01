// program that doubles the odd numbers in an array and throws away the even number

let numbers = [1, 2, 3, 4];

const newNumbers = numbers.filter((number) => number % 2 != 0).map((number) => number *2);
console.log("The doubled numbers are", newNumbers);


//1-array of movies containing the movies with a short title. short title means if title length is less than 8

const shortMovieTitle = movies.filter((movie) => movie.title.length < 8)
.map((movie)=> movie.title);
console.log("Short movie title :", shortMovieTitle);


//2-Create an array of movie titles with long movie titles. long title means if title length is more than 15

const longMovieTitle = movies.filter(function(movie){
    return movie.title.length > 15;
}).map((movie) => movie.title);
console.log("Long Movies Title: ", longMovieTitle);

//3-Count the number of movies made between 1980-1989 (including both the years)

const moviesFrom80s  = movies.filter((movie) => movie.year > 1980 && movie.year <1989);
const countOfMovie = moviesFrom80s .length;
console.log("Count of movies: ", countOfMovie); 

//4-Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const moviesByRating = movies.filter(function(movie){
    if (movie.rating >= 7)
    {
        return movie.tag = "Good";
    }
    if( movie.rating >= 4 && movie.rating < 7)
    {
        return movie.tag = "Average";
    }
    if(movie.rating <4)
    {
        return movie.tag = "Bad";
    }
});
console.log("movies by rating",moviesByRating);

// 5 - Using chaining, first filter the movies array to only contain the movies rated higher than 6.

const movieHigerRating = movies.filter(movie => movie.rating > 6).map(movie => movie.rating);
console.log(" movies rated higher than 6", movieHigerRating)

//6-Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.

const countNumOfMovies = movies.filter(function(movie){
    
    if((movie.title.toLowerCase().indexOf("surfer") >= 0) || 
    (movie.title.toLowerCase().indexOf("alien") >= 0) ||
    (movie.title.toLowerCase().indexOf("benjamin") >= 0))
    {
        return true;
    }    
});
console.log("Total Number of movie that contain Surfer, Alien, Benjamin",countNumOfMovies.length)

//duplicated words in the title: 

const movieTitle = movies.map(movie => movie.title)
.filter(findDuplicateWord);
console.log(movieTitle);

function findDuplicateWord(stringName)
{
    let found = false;
    const nameArr = stringName.split(" ");
    const len = nameArr.length;
    for(i =0; i <len ; i++)
    {
       const removedItem = nameArr.splice(0, 1);//nameArr[0];
        if(nameArr.includes(removedItem[0]))
        {
            found = true;
            break;
        }           
    } 
    return found;
}

//Calculate the average rating of all the movies using reduce. Optional

const moviesArr = movies.map(movie => movie.rating);
const summedRatings = moviesArr.reduce((sum, movie) => sum + movie, 0);
const averageRating = summedRatings / moviesArr.length
console.log("All Movies Average Rating :", averageRating.toFixed(1));

//Count the total number of Good, Average and Bad movies.

const goodMovies = movies.filter(movie => movie.rating >= 7);
const averageMovies = movies.filter(movie =>  movie.rating >= 4 && movie.rating < 7);
const badMovies = movies.filter(movie => movie.rating <4);
console.log(`{goodMovies: ${goodMovies.length}, averageMovies: ${averageMovies.length}, badMovies: ${badMovies.length}}`);

