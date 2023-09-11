import { db } from "../app/database.js"
import { NoteData } from "../controllers/noteController.js"

export async function insertNote(noteData: NoteData) {
  const { title, description, category, image } = noteData

  await db.note.create({
    data: {
        title,
        description,
        category,
        image: image || ''
    }
  })
}

export async function getNotes() {
  const notes = await db.note.findMany()

  return notes
}