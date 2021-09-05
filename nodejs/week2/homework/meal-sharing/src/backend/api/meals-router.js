const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

// 	Respond with the json for all the meals and  /api/meals

router.get("/", async (req, res) => {

  if( (req.query.maxPrice && isNaN(parseInt(req.query.maxPrice))) || 
      (req.query.createdAfter  && isNaN(Date.parse(req.query.createdAfter))) ||
      (req.query.limit && isNaN(parseInt(req.query.limit)))
    ){
    return res.status(400).send({"error": "Parameter not Acceptable"})
  }

    const filteredData = meals.filter( (meal) => req.query.maxPrice ? meal.price < req.query.maxPrice: true) 
    .filter((meal) => req.query.title? meal.title.toLowerCase().includes(req.query.title.toLowerCase()) : true)
    .filter((meal) => req.query.createdAfter ? Date.parse(meal.createdAt) > Date.parse(req.query.createdAfter) : true)
    
    if (req.query.limit && !isNaN(parseInt(req.query.limit))){
      filteredData = filteredData.slice(0, req.query.limit)
    }
    
    return res.json(filteredData)
});

//Respond with the json for the meal with the corresponding id and /api/meals/{id}

router.get("/:id", async (req, res) => {
  console.log("meals id")
  if(!isNaN(parseInt(req.params.id))){
      const meal = meals.filter((meal)=> meal.id == req.params.id)
      if(meal.length != 0){ // checking here if user give id which does not exist
        return res.json(meal[0])
      }
      else{
        return res.status(200).json({error: "id does not exist"})
      } 
  }
  else{
      return res.status(400).json({error:"wrong parameter"});
  }
})

module.exports = router;
