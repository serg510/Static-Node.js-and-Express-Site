const express = require('express');
const router = express.Router();



router.get('/projects/:id', function(req, res, next) {
  const projectId = req.params.id;
  const project = projects.find( ({ id }) => id === +projectId );
  
  if (project) {
    res.render('project', { project });
  } else {
    res.sendStatus(404);
  }
})

module.exports = router;