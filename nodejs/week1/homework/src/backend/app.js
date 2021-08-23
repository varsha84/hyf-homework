
const express = require("express");
const app = express();

/*meals, reviews, and reservations*/

const meals = require("./data/meals"); 
const reservations = require("./data/reservations")
const reviews = require("./data/reviews")

function mealsWithReviews(meals){
  const newMeals = meals.map((meal)=> { 
    meal.reviews = reviews.filter((review)=> review.mealId  == meal.id)
    return meal;
  })
  return newMeals;
}
function cheapMeals(){
  const cheapMeal = meals.filter((meal)=>meal.price < 70);
  return  mealsWithReviews(cheapMeal);
}
function largeMeals(){
  const largeMeal = meals.filter((meal)=> meal.maxNumberOfGuests > 5);
  return mealsWithReviews(largeMeal);
}
function randomMeal(){
  const mealId = Math.floor(Math.random() * 3) + 1;
  const randomMeal = meals.filter((meal)=>meal.id == mealId);
  return  mealsWithReviews(randomMeal);

}

app.get("/", async(request, response) => {
  response.send("Meal Sharing Web App");
});


app.get("/meal", async(request, response) => {

  response.json(randomMeal()[0]);
});

app.get("/meals", async(request, response) => {
  response.json(mealsWithReviews(meals));
});

app.get("/cheap-meals", async(request, response) => {
  response.json(cheapMeals());
});

app.get("/large-meals", async(request, response) => {
  response.json(largeMeals());
});

app.get("/reservations", async(request, response) => {
  response.json(reservations);
});

app.get("/reservation", async(request, response) => {
  const id = Math.floor(Math.random() * 2);
  response.json(reservations[id]);
});

module.exports = app;