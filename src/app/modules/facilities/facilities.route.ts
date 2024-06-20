import express from 'express'
import { auth } from '../../middlewares/auth'
import { USER_ROLE } from '../user/user.constant'
import validateRequest from '../../middlewares/validateRequest'
import { FacilityValidations } from './facilities.validation'
import { FacilityControllers } from './facilities.controller'


const router = express.Router()

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(FacilityValidations.createFacilityValidationSchema),
  FacilityControllers.createFacility
)
router.get('/', FacilityControllers.getAllFacility)
router.put('/:id', auth(USER_ROLE.admin), FacilityControllers.updateFacility)
router.delete('/:id', auth(USER_ROLE.admin), FacilityControllers.deleteFacility)

export const FacilityRoutes = router