const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

exports.authCheck = async (req, res, next) => {
  const token = req.header('x-auth-token')
  try {
    const tokenDetails = jwt.verify(token, process.env.JWT_SECRET)
    req.user = tokenDetails
    next()
  } catch (error) {
    res.status(403).json({ message: 'Access Denied' })
  }
}

exports.adminCheck = async (req, res, next) => {
  const token = req.header('x-auth-token')
  const tokenDetails = jwt.verify(token, process.env.JWT_SECRET)
  req.user = tokenDetails
  const adminUser = await User.findById(req.user._id)
  if (adminUser.role !== 'admin') {
    res.status(403).json({
      error: 'Admin Resource, access denied!',
    })
  } else {
    next()
  }
}
