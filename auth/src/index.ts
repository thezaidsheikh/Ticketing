import express from 'express'
import { json } from 'body-parser'
import { userRoutes } from './routes/userRoutes'

const app = express()
app.use(json())
app.use(userRoutes)
app.use('/', (req, res) => {
  console.log('done')
})
app.listen(3000, () => {
  console.log('Auth service running on : 3000')
})
