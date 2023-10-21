import { body, validationResult } from 'express-validator'
import { NextFunction, Request, Response } from 'express'
import { ResultWithContext } from 'express-validator/src/chain'

export const signupValidation = async (request: Request, response: Response, next: NextFunction) => {
  const validations = [body('email').isEmail().withMessage('Email must be valid'), body('password').trim().isLength({ min: 4, max: 20 }).withMessage('Password must be between 4 to 20 characters')]
  for (let validation of validations) {
    const result = await validation.run(request)
  }
  const error = validationResult(request)
  console.log('error', error)
  if (!error.isEmpty()) next(true)
  return response.status(400).send(error.array()[0])
}
