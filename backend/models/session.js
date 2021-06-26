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

export default sessionSchema