import { Router } from "express"
import { verifyNote } from "../middlewares/noteMiddleware.js"
import { createNewCategory, createNewNote, getAllCategories, getAllNotes, removeCategory } from "../controllers/noteController.js"

const noteRouter = Router()

noteRouter.post("/notes", verifyNote, createNewNote)
noteRouter.get("/notes", getAllNotes)
noteRouter.post("/categories", createNewCategory)
noteRouter.get("/categories", getAllCategories)
noteRouter.delete("/categories", removeCategory)

export default noteRouter