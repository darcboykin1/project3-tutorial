const express = require('express');
const router = express.Router();
const models = require('../db/models/index');


router.get('/', function(req, res, next){
models.Director.findAll({}).then(function(director){
res.render('directors/index', {
      director: director,
      title: 'List of Directors',
      });
    });
  });

  router.get('/new', function(req, res, next) {
    // models.Director.(req.params.id).then(function(director)
      res.render('directors/new', {
        ntitle: 'Add a New Director',
      });
      // director: director,
  });

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
        etitle: 'Edit Director'
      });
    });
  });

  router.put('/:id/', function(req, res, next) {
    models.Director.update({
      name: req.body.name,
    }, { where: { id: req.params.id } }).then(function() {
        res.redirect('/directors/' + req.params.id);
    });
  });


  router.post('/', function(req, res, next) {
    models.Director.create({
      name: req.body.name,
    }).then(function() {
        res.redirect('/directors');
    });
  });

module.exports = router;
