const express = require('express');
const router = express.Router();
const models = require('../db/models/index');
const moment = require('moment');

router.post('/directors', function(req, res, next) {
  models.Director.create({
    name: req.body.name,
  }, { where: { name: req.params.name } }).then(function() {
      res.redirect('directors/index');
  });
});

module.exports = router;
