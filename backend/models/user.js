const mongoose = require('mongoose')
const findOrCreate = require('mongoose-findorcreate')

const userSchema = new mongoose.Schema({
  username: String,
  googleId: String,
  plans: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Plan',
    },
  ],
})

userSchema.plugin(findOrCreate)

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
