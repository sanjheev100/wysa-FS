const express = require('express')
const router = express.Router()

const { newAnswers } = require('../controller/answersControllers')
const { authCheck } = require('../middlewares/authCheck')

router.post('/saveAnswers', authCheck,newAnswers)

module.exports = router
