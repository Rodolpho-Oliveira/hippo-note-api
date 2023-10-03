import { db } from "../app/database.js"
import { NoteData } from "../controllers/noteController.js"

export async function insertNote(noteData: NoteData) {
  const { title, description, categoryName, image } = noteData

  await db.note.create({
    data: {
        title,
        description,
        categoryName,
        image: image || ''
    }
  })
}

export async function insertCategory(category: string) {
  await db.category.create({
    data: {
      name: category
    }
  })
}

export async function getCategoryByName(category: string) {
  const categoryExists = await db.category.findFirst({
    where: {
      name: category
    }
  })

  return categoryExists
}

export async function getNotes() {
  const notes = await db.note.findMany()

  return notes
}

export async function findAllCategory() {
  const categories = await db.category.findMany()

  return categories
}