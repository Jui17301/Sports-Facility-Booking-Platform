import express, { Application } from 'express'
import cors from 'cors'

import cookieParser from 'cookie-parser'
import router from './app/routes'
import { BookingControllers } from './app/modules/booking/booking.controller'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import NotFound from './app/middlewares/notFound'

const app: Application = express()

// parsers
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: ['http://localhost:5173'] }))

// application routes
app.use('/api', router)

app.get('/api/check-availability', BookingControllers.checkAvailability)

// globalErrorHandler
app.use(globalErrorHandler)

// Not Found Route
app.use(NotFound)

export default app