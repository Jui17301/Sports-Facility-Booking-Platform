import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { BookingValidations } from './booking.validation'
import { USER_ROLE } from '../user/user.constant'
import { auth } from '../../middlewares/auth'
import { BookingControllers } from './booking.controller'


const router = express.Router()

router.post(
  '/',
  validateRequest(BookingValidations.createBookingValidation),
  auth(USER_ROLE.user),
  BookingControllers.createBooking
)
router.get('/', auth(USER_ROLE.admin), BookingControllers.getAllBookings)
router.get('/:userId', auth(USER_ROLE.user), BookingControllers.getUserBookings)
router.delete('/:id', auth(USER_ROLE.user), BookingControllers.cancelBooking)

export const BookingRoutes = router