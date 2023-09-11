import express, {json} from 'express'
import "express-async-errors"
import cors from 'cors'
import { errorHandler } from '../middlewares/errorHandlerMiddleware.js'
import noteRouter from '../routes/noteRouter.js'

const app = express()

app.use(cors())
app.use(json())

app.use(noteRouter)
app.use(errorHandler)

export default app