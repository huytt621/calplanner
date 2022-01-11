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

loginRouter.get('/authenticated', (request, response) => {
  const authenticated = typeof request.user !== 'undefined'

  const user = request.user
  response.status(200).json({
    authenticated,
    user
  })
})

loginRouter.get('/logout', (request, response) => {
  request.logout()
  response.redirect('/')
})

module.exports = loginRouter
