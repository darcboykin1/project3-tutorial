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

module.exports = router;
