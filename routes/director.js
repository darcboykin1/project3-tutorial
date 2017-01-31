const express = require('express');
const router = express.Router();
const models = require('../db/models/index');
const moment = require('moment');

router.get('/:id', function(req, res, next){
  models.Director.findById(req.params.id).then(function(director){
    res.render('directors/show', {
      director: director
    });
  });
});

router.get('/:id/edit', function(req, res, next){
  models.Director.findById(req.params.id).then(function(director){
    res.render('directors/edit', {
      director: director,
        moment: moment,
        etitle: 'Edit Director'
    });
  });
});

router.put('/:id', function(req, res, next) {
  models.Director.update({
    name: req.body.name,
  }, { where: { name: req.params.name } }).then(function() {
      res.redirect('/directors' + req.params.id);
  });
});


module.exports = router;
