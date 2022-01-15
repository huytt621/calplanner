const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
  name: String,
  units: Number,
})

courseSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      delete returnedObject._id
      delete returnedObject.__v
    }
})

const sessionSchema = new mongoose.Schema({
  name: String,
  courses: [
    {
      type: courseSchema
    }
  ],
})

sessionSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

const planSchema = new mongoose.Schema({
  user: String,
  name: String,
  years: [
    [
      {
        type: sessionSchema,
      }
    ]
  ],
  date: Date,
})

planSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('Plan', planSchema)
