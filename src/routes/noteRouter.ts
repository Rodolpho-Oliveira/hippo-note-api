import { Router } from "express"
import { verifyNote } from "../middlewares/noteMiddleware.js"
import { createNewCategory, createNewNote, getAllCategories, getAllNotes, removeCategory, removeNote, updateNote } from "../controllers/noteController.js"

const noteRouter = Router()

noteRouter.post("/notes", verifyNote, createNewNote)
noteRouter.get("/notes", getAllNotes)
noteRouter.delete("/notes", removeNote)
noteRouter.put("/notes", verifyNote, updateNote)
noteRouter.post("/categories", createNewCategory)
noteRouter.get("/categories", getAllCategories)
noteRouter.delete("/categories", removeCategory)

export default noteRouter