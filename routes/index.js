const express = require('express');
const router = express.Router();
const data = require("./data/data.json")


//An "index" route (/) to render the "Home" page with the locals set to data.projects
router.get('/', (req,res) => {
    res.locals.projects = data.projects;
    res.render('index');
});

module.exports = router;