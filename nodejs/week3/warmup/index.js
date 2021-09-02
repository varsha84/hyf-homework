const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week3 homework"));
// add mutiple parameter
app.get("/calculator/add",(req,res) =>{
    console.log("calculate addition");
    const values = Object.values(req.query);
    for(let value in values){
        if (isNaN(value)){
            return res.status(406).json({error:"wrong parameter"}) 
        }
    }

    const total = values.reduce((a,b)=>(parseInt(a) + parseInt(b)))
    res.send(`addtion of multiple parameters: ${total}`);
});

//substraction of two numbers
app.get("/calculator/substraction",(req,res) =>{
    console.log("calculate substraction");
    const values = Object.values(req.query);
    for(let value in values){
        if (isNaN(value)){
            return res.status(406).json({error:"wrong parameter"}) 
        }
    }
    const sub = values[0] - values[1]
    res.send(`sustraction of two parameters:${sub}`);
}); 
// multiplication of mutiple parameter
app.get("/calculator/multiply",(req,res) =>{
    console.log("calculate multiplication");
    const values = Object.values(req.query); 
    for( let value in values){
        if (isNaN(value)){
            return res.status(406).json({error:"wrong parameter"}) 
        }
    }
    const total = values.reduce((a,b)=>(parseInt(a) * parseInt(b)))
    res.send(`multiplication of multiple parameters ${total}`);
});
//Division of two numbers
app.get("/calculator/division",(req,res) =>{
    console.log("calculate division");
    const values = Object.values(req.query);
    for(let value in values){
        if (isNaN(value)){
            return res.status(406).json({error:"wrong parameter"}) 
        }
    }
    const div = values[0] / values[1]
    res.send(`division of two parameters:${div}`);
}); 
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
