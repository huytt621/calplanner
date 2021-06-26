const mongoose = require('mongoose')

const planSchema = new mongoose.Schema({
  name: String,
  years: [
    [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Session'
      }
    ]
  ]
})

export default planSchema