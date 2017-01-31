const express = require('express');
const router = express.Router();
const models = require('../db/models/index');

router.get('/', function(req, res, next){
models.Director.findAll({}).then(function(director){
res.render('directors/index', {
      director: director,
      title: 'All Directors',
      });
    });
  });

  router.get('/:id', function(req, res, next) {
  models.Director.findById(req.params.id).then(function(director) {
    res.render('directors/id', { director: director });
  });
});

module.exports = router;
