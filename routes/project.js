const express = require('express');
const router = express.Router();
const { projects } = require("../data/data.json")

//looking for the project by the id property 
//if found render selected project
// if not send error
router.get('/:id', function(req, res, next) {
  const projectId = req.params.id;
  const project = projects.find( ({ id }) => id === +projectId );
  
  if (project) {
    res.render('project', { project });
  } else {
    res.sendStatus(404);
  }
})

module.exports = router;