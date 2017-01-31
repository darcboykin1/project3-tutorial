var express = require('express');
var router = express.Router();
var models = require('../db/models/index')

router.get('/', function(req, res, next) {
  models.Movie.findAll({})
  .then(function(movies) {
    res.render('./movies/index', {
    movies: movies
    });
  });
});

router.get('/:id', function(req, res, next) {
  models.Movie.findById(req.params.id)
  .then(function(movie) {
    res.render('./movies/movie', {
      movie: movie
    });
  });
});

module.exports = router;
