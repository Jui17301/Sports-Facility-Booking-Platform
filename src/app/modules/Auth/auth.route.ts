import express from 'express'

import { AuthValidations } from './auth.validation'
import { AuthControllers } from './auth.controller'
import validateRequest from '../../middlewares/validateRequest'

const router = express.Router()

router.post(
  '/signup',
  validateRequest(AuthValidations.signUpSchema),
  AuthControllers.signup
)
router.post(
  '/login',
  validateRequest(AuthValidations.loginSchema),
  AuthControllers.login
)

export const AuthRoutes = router