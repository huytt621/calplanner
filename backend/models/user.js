const mongoose = require('mongoose')
const findOrCreate = require('mongoose-findorcreate')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
  username: {
    type: 'String',
    required: true,
  },
  googleId: {
    type: 'String',
    unique: true,
    required: true,
  },
  plans: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Plan',
    },
  ],
})

userSchema.plugin(findOrCreate)
userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.googleId
  },
})

const User = mongoose.model('User', userSchema)

module.exports = User
