import jwt, { JwtPayload } from 'jsonwebtoken'
import AppError from '../errors/AppError'
import { TUserRole } from '../modules/user/user.interface'
import { catchAsync } from '../utils/catchAsync'
import { User } from '../modules/user/user.model'
import config from '../config'


export const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req, res, next) => {
    const accessToken = req.header('Authorization')?.replace('Bearer ', '')
    console.log(accessToken)

    if (!accessToken) {
      throw new AppError(401, 'You are not authorized to access this route')
    }

    const verifiedToken = jwt.verify(
      accessToken as string,
      config.jwt_access_secret as string
    )

    const { role, email } = verifiedToken as JwtPayload

    const user = await User.findOne({ email })

    if (!user) {
      throw new AppError(401, 'User not found')
    }

    if (!requiredRoles.includes(role)) {
      throw new AppError(401, 'You are not authorized to access this route')
    }

    next()
  })
}