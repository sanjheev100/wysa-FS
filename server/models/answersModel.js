const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const AnswerSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: 'User',
    },
    UserResult: [
      {
        question: {
          type: ObjectId,
          ref: 'Question',
        },
        answer: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
)

module.exports = mongoose.model('Answer', AnswerSchema)
