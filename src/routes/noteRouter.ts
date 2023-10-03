import { Router } from "express"
import { verifyNote } from "../middlewares/noteMiddleware.js"
import { createNewCategory, createNewNote, getAllNotes } from "../controllers/noteController.js"

const noteRouter = Router()

noteRouter.post("/notes", verifyNote, createNewNote)
noteRouter.get("/notes", getAllNotes)
noteRouter.post("/categories", createNewCategory)

export default noteRouter