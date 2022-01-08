const passport = require('passport')
const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.get('/google', passport.authenticate('google', {
  scope: ['profile']
}))

loginRouter.get('/google/callback', passport.authenticate('google'), (request, response) => {
  response.redirect('/')
})

module.exports = loginRouter