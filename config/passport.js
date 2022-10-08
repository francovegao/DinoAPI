const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/users');

passport.use(new localStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, function(username, password, done){
    User.findOne({ where: {username} }).then(function(user){
        if (!user || !user.validatePass(password)) {
            return done(null, false, { errors: { 'usuario o contraseña': 'equivocados' } })
        }
        return done(null, user);
    }).catch(done);
}));

module.exports = passport;