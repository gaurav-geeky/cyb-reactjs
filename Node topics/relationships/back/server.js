

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();
const myRoute = require("./route/myRoute"); 

mongoose.connect("mongodb://localhost:27017/relationPractice")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

app.use("/", myRoute); 

app.listen(9999, () => {
    console.log("server is running at 9999");
}); 


