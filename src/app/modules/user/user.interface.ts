/* eslint-disable no-unused-vars */
import { Model } from 'mongoose'
import { USER_ROLE } from './user.constant'
export interface TUser {
  _id?: string
  name: string
  email: string
  password: string
  phone: string
  role: keyof typeof USER_ROLE
  address: string
}
export interface UserModel extends Model<TUser> {
  isUserExistsByEmail(email: string): Promise<TUser>
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>
}
export type TUserRole = keyof typeof USER_ROLE
