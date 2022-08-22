const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    UserName: {
      type: String,
      Required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'user',
      enum: ['user', 'admin'],
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
