const express = require('express')
const router = express.Router()

const { authCheck, adminCheck } = require('../middlewares/authCheck')

const {
  createQuestion,
  getQuestions,
} = require('../controller/questionController')

router.post('/createQuestion', adminCheck, createQuestion)
router.get('/getQuestions', authCheck, getQuestions)

module.exports = router
