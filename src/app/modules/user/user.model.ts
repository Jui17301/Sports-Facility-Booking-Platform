
import { TUser } from "./user.interface";
import { Schema, model } from "mongoose";


const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  address: {
    type: String,
    trim: true,
  },
});

const User = model<TUser>('User', userSchema);

export default User;