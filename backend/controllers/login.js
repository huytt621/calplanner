const passport = require('passport')
const loginRouter = require('express').Router()

loginRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
)

loginRouter.get(
  '/google/callback',
  passport.authenticate('google'),
  (request, response) => {
    response.redirect('/')
  }
)

loginRouter.get('/user', (request, response) => {
  if (!request.isAuthenticated()) {
    response.status(404).json({ authenticated: false })
  } else {
    response.status(200).json(request.user)
  }
})

loginRouter.get('/logout', (request, response) => {
  request.logout()
  response.redirect('/')
})

module.exports = loginRouter
