import { Router } from "express"
import { verifyNote } from "../middlewares/noteMiddleware.js"
import { createNewNote } from "../controllers/noteController.js"

const noteRouter = Router()

noteRouter.post("/notes", verifyNote, createNewNote)

export default noteRouter