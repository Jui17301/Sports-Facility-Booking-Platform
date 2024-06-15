import express from 'express'

import { UserValidations } from './user.validation'
import { UserControllers } from './user.controller'
import validateRequest from '../../middlewares/validateRequest'
const router = express.Router()

router.post(
  '/signup',
  validateRequest(UserValidations.createUserValidation),
  UserControllers.createUser
)
router.get('/', UserControllers.getAllUser)

export const UserRoutes = router