const mongoose = require('mongoose')

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

const sessionSchema = new mongoose.Schema({
  name: String,
  courses: [
    {
      name: String,
      units: Number
    }
  ],
})

module.exports = mongoose.model('Plan', planSchema)