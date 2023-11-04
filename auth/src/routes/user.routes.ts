// Importing express router from express
import express from 'express'
import * as UserMiddleware from '../middleware/user.middleware'
import { UserModel } from '../models/user.model'
import { BadRequestError } from '../error/badRequestError'

const router = express.Router()

router.post('/api/users/signup', UserMiddleware.signupValidation, async (req, res) => {
  const { email, password } = req.body
  const existingUser = await UserModel.findOne({ email })
  if (existingUser) throw new BadRequestError('Email already in use')
  const user = UserModel.build({ email, password })
  await user.save()
  return res.send(user)
})

router.post('/api/users/signin', (req, res) => {
  return res.send('HI There!')
})

router.post('/api/users/signout', (req, res) => {
  return res.send('HI There!')
})

router.get('/api/users/currentuser', (req, res) => {
  console.log('asa')
  return res.send('HI There!')
})

export { router as userRoutes }
