const config = require('./config')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const User = require('../models/user')

passport.use(
  new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  }, async (accessToken, refreshToken, profile, done) => {
    const user = await User.findOrCreate({
      username: profile.displayName,
      googleId: profile.id,
      plans: []
    }, (error, user) => {
      return done(error, user)
    })  
  })
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user)
  })
})