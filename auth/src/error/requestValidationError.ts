import type { ValidationError } from 'express-validator'
import { CustomError } from './customError'

export class RequestValidationError extends CustomError {
  statusCode = 400
  constructor(public errors: ValidationError[]) {
    super('Invalid request')
    // Only because we are extending built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }
  // structure the error
  serializeErrors() {
    return this.errors.map((error) => {
      if (error.type == 'field') return { message: error.msg, field: error.path }
      return { message: error.msg }
    })
  }
}
