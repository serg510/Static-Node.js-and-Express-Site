const express = require("express");
const path = require("path");
const { projects } = require("./data/data.json");
 

const app = express();
// view engine setup
app.use("view engine","pug");
//static route to serve the static files located in the public folder
app.use('/static', express.static('public'));

//An "index" route (/) to render the "Home" page with the locals set to data.projects
app.get('/', (req,res) => {
    res.locals.projects = data.projects;
    res.render('index');
});
app.get('/about', (req,res) => {
    res.render('about');
});



