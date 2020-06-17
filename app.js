const express = require("express");
const path = require("path");
const jsonData = require("./data/data.json");

const app = express();
// view engine setup
app.use("view engine","pug");
//static route to serve the static files located in the public folder
app.use('/static', express.static(path.join(__dirname, 'public')));





module.exports = 