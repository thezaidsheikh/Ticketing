import { NextFunction, Request, Response } from 'express'
import { CustomError } from '../error/customError'

export const errorHandler = (error: Error, request: Request, response: Response, next: NextFunction) => {
  console.log('Error handler error : ', error)
  if (error instanceof CustomError) {
    return response.status(error.statusCode).send({ errors: error.serializeErrors() })
  }
  return response.status(400).send({ errors: [{ message: 'Something wents wrong' }] })
}
