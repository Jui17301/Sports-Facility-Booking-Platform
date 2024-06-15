import express, { Application } from 'express'
import cors from 'cors'

import { AuthRoutes } from './app/modules/Auth/auth.route'
import cookieParser from 'cookie-parser'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/notFound'

const app: Application = express()

// parsers
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: ['http://localhost:5173'] }))

// application routes
app.use('/api', router)

// globalErrorHandler
app.use(globalErrorHandler)

// Not Found Route
app.use(notFound)

export default app