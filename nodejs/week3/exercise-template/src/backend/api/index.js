const express = require("express");
const app = express();
const router = express.Router();
const concertsRouter = require("./api/concerts");
//const port = process.env.PORT || 3000;

router.use("/api/concerts", concertsRouter);
