const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema(
  {
    FullQuestion: {
      type: String,
      required: true,
    },
    QuestionType: {
      type: String,
      enum: ['standard', 'time'],
    },
    QuestionOptions: {
      type: Array,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Question', QuestionSchema)
