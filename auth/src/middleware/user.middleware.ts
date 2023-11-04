import { body, validationResult } from 'express-validator'
import { NextFunction, Request, Response } from 'express'
import { ResultWithContext } from 'express-validator/src/chain'
import { RequestValidationError } from '../error/requestValidationError'
import { DatabaseConectionError } from '../error/databaseConnectionError'

// Validation for the signup payload
export const signupValidation = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const validations = [
      body('email').trim().toLowerCase().isEmail().withMessage('Email must be valid'),
      body('password').trim().isLength({ min: 4, max: 20 }).withMessage('Password must be between 4 to 20 characters'),
    ]
    for (let validation of validations) {
      const result = await validation.run(request)
    }
    const error = validationResult(request)
    if (error.isEmpty()) {
      return next()
      // return next(new DatabaseConectionError())
    }
    console.log(error.array())
    return next(new RequestValidationError(error.array()))
    // return next(error.array()[0]['msg'])
  } catch (error) {
    console.log('middle error', error)
  }
}
