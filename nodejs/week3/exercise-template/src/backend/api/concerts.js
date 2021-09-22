const { response } = require("express");
const express = require("express");
//const { request } = require("../app");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    if (Object.keys(request.query).length > 0) {
      console.log("inside query", request.query);

      if (request.query.maxPrice && !isNaN(Number(request.query.maxPrice))) {
        await knex("concerts").where('price', '>', Number(request.query.maxPrice))
          .then(rows => response.json(rows))
      }
      else if (request.query.title && typeof request.query.title === 'string') {
        await knex("concerts").where('title', 'like', `%${request.query.title}%`)
          .then(rows => response.json(rows));
      } else if (request.query.createdAfter && !isNaN(Date.parse(request.query.createdAfter))) {
        await knex("concerts").where('created_date', '>', '2020-01-01')
          .then(rows => response.json(rows));
      } else if (request.query.band && typeof request.query.band === 'string') {
        await knex("concerts").where('band', 'like', `%${request.query.band}%`)
          .then(rows => response.json(rows))
      }
    } else {
     /*  console.log("no query found")
      await knex("concerts").select()
      .then(data=>response.json(data))
      .catch (error => response.json)  */
      const concerts = await knex('concerts')
      response.json(concerts); 
    }

  } catch (error) {
    throw error;
  }
});
// concert Get Request for api/concerts/{id}

router.get("/:id", async (request, response) => {
  try {
  // knex query
   await knex('concerts').where({ id: request.params.id}).then((data)=> response.json(data));
  } catch (error) {
    throw error;
  }
}); 

// concert post request for Adds a new concert and api/concerts/
router.post("/", async (request, response) => {
  try {
    const concert = request.body;
    console.log("added ne record :"+ concert)
    await knex("concerts").insert(concert).then(
      data => response.json(data)
    );
  } catch (error) {
    throw error;
  }
});

//PUT request for Updates the concert by id and api/concerts/2


router.put("/:id", async(request, response) =>{
    try{
    console.log("update concert here");
    //knex query
    await knex("concerts")
    .where({id: parseInt(request.params.id)})
    .update(request.body)
    .then(updated => updated? response.json('concert has updated'):response.json('something went wrong')) 
  }
  catch (error){
    throw error;
  }
});

//Delete request for Deletes the concert by id and api/concerts/2
router.delete("/:id", async(request, response) =>{
  try{
    console.log("delete concert here");
  //knex query
  await knex("concerts")
  .where({id: request.params.id})
  .delete()
  .then(deleted = deleted? response.json('concert has deleted'): response.json('something went wrong'))
  }catch (error){
    throw error;
  }
}); 

module.exports = router;
