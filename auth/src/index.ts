import express from 'express'
import { json } from 'body-parser'
import { userRoutes } from './routes/user.routes'
import { errorHandler } from './middleware/errorHandlerMiddleware'
import mongoose from 'mongoose'

const app = express()
app.use(json())
app.use(userRoutes)
app.use(errorHandler)

const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth')
    app.listen(3000, () => {
      console.log('Auth service running on : 3000')
    })
  } catch (error) {
    console.error(error)
  }
}

start()
