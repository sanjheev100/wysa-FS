const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')

require('dotenv').config()

//server
const app = express()

//database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB CONNECTED'))
  .catch((error) => console.log(`DB CONNECTION ERROR ${error}`))

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '2mb' }))
app.use(cors())

//routes middleware

fs.readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)))

//port

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`SERVER IS RUNNING ON PORT ${port}`))
