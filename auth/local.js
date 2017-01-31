const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const models = require('../db/models/index');
const authHelpers = require('../auth/auth-helper');

const options = {};

init();

passport.use(new LocalStrategy(options, (username, password, done) =>{
  // will check to see if the username exists
  models.User.findOne({
    where: {
      username
    }
  }).then((user)=> {
    console.log(user);
    if (!user) {
      return done(null, false);
    }
    if (!authHelpers.comparePass(password, user.dataValues.password)) {
      return done(null, false);
    } else {
      return done(null, user.dataValues);
    }
  })
  .catch((err) => { return done(err); });
}));

module.exports = passport;
