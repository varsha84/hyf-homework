const { response } = require("express");
const express = require("express");
const router = express.Router();
const reservations = require("./../data/reservations.json")

//Respond with the json for all reservations and /api/reservations
router.get("/",async (req, res)=>{
    console.log("i am on reservation router");
    res.json(reservations);
});

//Respond with the json for the reservation with the corresponding id and api/reservations/{id}
router.get("/:id", async (req, res) =>{
    console.log("reservation");
    if(!isNaN(parseInt(req.params.id)))
    {
        const reservation = reservations.filter((reservation) => reservation.id == req.params.id)
        if(reservation.length != 0)
        {
            return res.json(reservation[0]);
        }
        else
        {
            return res.send(`No reservation found with this id : ${req.params.id}`)
        }
    }
    else{
         return res.status(400).json({error:"wrong parameter"});
    }
  });

module.exports = router;