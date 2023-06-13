import { db } from "../app/database.js"
import { NoteData } from "../controllers/noteController.js"

export async function insertNote(noteData: NoteData) {
  const { title, description, category, image } = noteData

  db.note.create({
    data: {
        title,
        description,
        category,
        image
    }
  })
}