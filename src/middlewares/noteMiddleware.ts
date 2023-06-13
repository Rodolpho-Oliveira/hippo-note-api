import { Request, Response, NextFunction } from "express"
import { NoteData } from "../controllers/noteController.js"
import { noteSchema } from "../schemas/noteSchema.js"

export async function verifyNote(req: Request, res: Response, next: NextFunction) {
  const {title, description, category, image}: NoteData = req.body

  const validation = noteSchema.validate({title, description, category, image})
  
  if(validation.error){
    throw { type: "Note validation error", status: 400 }
  }

  next()
}