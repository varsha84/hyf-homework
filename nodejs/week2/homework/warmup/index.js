const { request } = require("express");
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/numbers/add", (req, res)=>{
    if(!isNaN(parseInt(req.query.first)) && !isNaN(parseInt(req.query.second))){
        const first = parseInt(req.query.first);
        const second = parseInt(req.query.second);  
        return res.send(`first num and second num addition : ${first + second}`);
    }  
    else{
        return res.status(406).json({error:"id was not a number"});
    }
}) 

app.get("/numbers/multiply/:first/:second",(req, res)=>{
    if(!isNaN(parseInt(req.params.first)) && isNaN(parseInt(req.params.second))) {
        const first = parseInt(req.params.first);
        const second = parseInt(req.params.second);  
        return res.send(`first num and second num multiply : ${first * second}`)
    }
    else {
        return res.status(406).json({error:"id was not a number"});
    }
})


app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

