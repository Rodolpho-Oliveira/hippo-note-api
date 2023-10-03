import { getCategoryByName, insertCategory } from "../repositories/noteRepository.js";

export async function checkCategory(category: string) {
    const categoryExists = await getCategoryByName(category)

    if (categoryExists) {
      throw { type: "Category already exist", status: 409 } 
    }

    await insertCategory(category)
}