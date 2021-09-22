const express = require("express");
const app = express();
const router = express.Router();

//const contactsRouters = require("./api/contacts")
const concertsRouter = require("./api/concerts");

app.get("/",(req, res)=>{
    res.send("my server is running")
});
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

//app.use("/api/contacts", contactsRouters);
app.use("/api/concerts", concertsRouter);

module.exports = app;