const express = require("express");
const router = express.Router();
const reviews = require("./../data/reviews.json")
//Respond with the json for all reviews and /api/reviews

router.get("/",async (req, res)=>{
    console.log("I am on review router");
    res.send(reviews);
})

//	Respond with the json for all reviews and /api/reviews/{id}

router.get("/:id", async (req, res) =>{
    if(!isNaN(parseInt(req.params.id))){
        const review = reviews.filter((review) => review.id == req.params.id)
        if(review.length != 0)
        {
            return res.json(review[0]);
        }
        else
        {
            return res.json(`No reservation found with this id : ${req.params.id}`);
        }
    }
    else{
        return res.status(400).json({error:"id is not right format"});
    }
})

module.exports = router;