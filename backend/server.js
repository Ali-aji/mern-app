const { Console } = require('console')
const express = require('express')
const router = require('./routes/goalsRoutes')
const dotenv  = require('dotenv').config()
const port = process.env.port || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/goals", require("./routes/goalsRoutes"))

app.listen(port, () =>  console.log(`listen on port ${port}`))
