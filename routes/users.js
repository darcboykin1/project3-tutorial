var express = require('express');
var router = express.Router();
var authHelpers = require('../auth/auth-helper');
/* GET users listing. */
router.get('/', authHelpers.loginRequired, (req, res, next) => {
  res.render('user/index', {
    user: req.user.dataValues
  });
});

module.exports = router;
