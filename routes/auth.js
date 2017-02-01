const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/auth-helper');
const passport = require('../auth/local');

router.get('/register', authHelpers.loginRedirect, (req, res)=> {
  res.render('auth/register');
});

router.post('/register', (req, res, next)  => {
  authHelpers.createUser(req, res)
  .then((user) => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/auth/login');
    });
  })
  .catch((err) => { res.status(500).json({ status: 'error' }); });
});

router.get('/login', authHelpers.loginRedirect, (req, res)=> {
  res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/users',
    failureRedirect: '/auth/login',
    failureFlash: true
  })
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;


