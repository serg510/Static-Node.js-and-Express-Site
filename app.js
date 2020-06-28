const express = require("express");
const path = require("path");

 

const app = express();
// view engine setup
app.set("view engine","pug");
//static route to serve the static files located in the public folder

app.use('/static', express.static(path.join(__dirname, 'public')))

const mainRoute = require("./routes/index.js");
const aboutRoute = require("./routes/about.js");
const projectRoute = require("./routes/project.js");

app.use(mainRoute);
app.use('/about', aboutRoute);
app.use('/project', projectRoute);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`The server is running on localhost:${PORT}!`);
});

