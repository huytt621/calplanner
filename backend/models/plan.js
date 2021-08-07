const mongoose = require('mongoose')

const sessionSchema = new mongoose.Schema({
  name: String,
  numSessionsPerYear: Number,
  description: String,
  courses: [
    {
      name: String,
      units: Number
    }
  ],
})

sessionSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      delete returnedObject._id
      returnedObject.courses.forEach(course => {
        delete course._id
      })
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