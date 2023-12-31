import { deleteCategoryByName, deleteNoteById, findAllCategory, findNoteById, getCategoryByName, insertCategory } from "../repositories/noteRepository.js";

export async function checkCategory(category: string) {
    const categoryExists = await getCategoryByName(category)

    if (categoryExists) {
      throw { type: "Category already exist", status: 409 } 
    }

    await insertCategory(category)
}

export async function getCategories() {
  const categories = await findAllCategory()

  return categories
}

export async function checkIfCategoryExist(category: string) {
  const categoryExists = await getCategoryByName(category)

  if (!categoryExists) {
    throw { type: "Category not found", status: 404 }
  }

  await deleteCategoryByName(category)
}

export async function checkNoteById(id: number) {
  const note = await findNoteById(id)

  if (!note) {
    throw { type: "Note not found", status: 404 }
  }
}