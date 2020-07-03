const express = require("express");
const path = require("path");

 

const app = express();
// view engine setup
app.set("view engine","pug");

//static route to serve the static files located in the public folder
app.use('/static', express.static(path.join(__dirname, 'public')))

//declaring routes
const mainRoute = require("./routes/index.js");
const aboutRoute = require("./routes/about.js");
const projectRoute = require("./routes/project.js");

// calling routes
app.use(mainRoute);
app.use('/about', aboutRoute);
app.use('/project', projectRoute);

//create error 
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
  });

//error handler to handle the error 
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    console.log(`Oops!, we have a problem: ${err.status} - ${err.message}`);
    res.render('error');
});


//declaring a port variable to listen on
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`The server is running on localhost:${PORT}!`);
});

