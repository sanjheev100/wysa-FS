const router = require('express').Router()

// const { roleCheck } = require('../middlewares/roleCheck')

const {
  userSignupController,
  loginController,
  userDetailsController,
  logoutController,
} = require('../controller/authControllers')
const { authCheck } = require('../middlewares/authCheck')

router.post('/signup', userSignupController)
router.post('/login', loginController)
router.post('/logout', authCheck, logoutController)
router.get('/userDetails', authCheck, userDetailsController)

module.exports = router
