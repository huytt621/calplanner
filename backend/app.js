const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const passport = require('passport')
const cookieSession = require('cookie-session')
const passportSetup = require('./utils/passport-setup')
const userRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const planRouter = require('./controllers/plans')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')

logger.info('connecting to', config.MONGODB_URI)

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.SECRET],
  })
)
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/users', userRouter)
app.use('/auth', loginRouter)
app.use('/api/plans', planRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
