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
  const user = request.user
  if (!user) {
    response.status(200).json({
      authenticated: false,
    })
  } else {
    response.status(200).json(user)
  }
})

module.exports = loginRouter
