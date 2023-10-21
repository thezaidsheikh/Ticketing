// Importing express router from express
import express from 'express'
import * as UserMiddleware from '../middleware/userMiddleware'

const router = express.Router()

router.post('/api/users/signup', (req, res) => {
  return res.send('HI There!')
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
