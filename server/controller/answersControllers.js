const Answer = require('../models/answersModel')

exports.newAnswers = async (req, res) => {
  try {
    const { _id } = req.user
    const { result } = req.body
    const answers = await Answer.findOne({ user: _id })
    if (answers) {
      answers.UserResult = []
      for (const key in result) {
        answers.UserResult.push({
          question: key,
          answer: result[key],
        })
      }
      await answers.save()
      res.status(200).json({ message: 'Your updated answers saved' })
    } else {
      const newAnswers = await new Answer({ user: _id }).save()
      for (const key in result) {
        newAnswers.UserResult.push({
          question: key,
          answer: result[key],
        })
      }
      await newAnswers.save()

      res.status(200).json({ message: 'Thanks for your response' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
