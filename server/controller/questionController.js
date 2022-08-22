const Question = require('../models/questionsModel')

exports.createQuestion = async (req, res) => {
  const { FullQuestion, QuestionType, QuestionOptions } = req.body
  try {
    if (!FullQuestion || !QuestionType) {
      return res
        .status(422)
        .json({ message: 'Question and QuesitonType is must to fill' })
    }
    await new Question(req.body).save()
    res.status(200).json({ message: 'Question Created SuccessFully' })
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

exports.getQuestions = async (req, res) => {
  try {
    const questionList = await Question.find({}).sort({ createdAt: 1 })
    res.status(200).json({ questionList })
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
