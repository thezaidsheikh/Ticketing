import { CustomError } from './customError'

export class DatabaseConectionError extends CustomError {
  reason = 'Error connecting to db'
  statusCode = 500
  constructor() {
    super('Error connecting to db')
    // Only because we are extending built in class
    Object.setPrototypeOf(this, DatabaseConectionError.prototype)
  }
  // structure the error
  serializeErrors() {
    return [{ message: this.reason }]
  }
}
