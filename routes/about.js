const express = require('express');
const router = express.Router();

//render the about page once clicked
router.get('/', (req,res) => {
    res.render('about');
});

module.exports = router;