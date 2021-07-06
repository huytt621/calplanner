const mongoose = require('mongoose')

const sessionSchema = new mongoose.Schema({
  name: String,
  courses: [
    {
      name: String,
      units: Number
    }
  ],
})

const planSchema = new mongoose.Schema({
  name: String,
  years: [
    [
      {
        type: sessionSchema,
      }
    ]
  ]
})

module.exports = mongoose.model('Plan', planSchema)