import mongoose from 'mongoose'

// interface for our user schema
interface IUser {
  email: string
  password: string
}

// An interface that descibes the properties of user document has
interface IUserDocument extends IUser, mongoose.Document {
  updatedAt: Date
  createdAt: Date
}

// An interface that descibes the properties of user model has
interface IUserModel extends mongoose.Model<IUserDocument> {
  build(user: IUser): IUserDocument
}

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

UserSchema.statics.build = (user: IUser) => {
  return new UserModel(user)
}

const UserModel = mongoose.model<IUserDocument, IUserModel>('User', UserSchema)

export { UserModel }
