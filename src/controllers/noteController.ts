import { Request, Response } from 'express'
import { Note } from '@prisma/client'
import { getNotes, insertNote } from '../repositories/noteRepository.js'
import { checkCategory } from '../services/noteService.js'

export type NoteData = Omit<Note, 'id' | 'createdAt' | 'updatedAt'>

export async function createNewNote(req: Request, res: Response) {
  const {title, description, categoryName, image}: NoteData = req.body

  await insertNote({title, description, categoryName, image})

  res.sendStatus(201)
}

export async function createNewCategory(req: Request, res: Response) {
  const { category }: { category: string } = req.body

  await checkCategory(category)

  res.sendStatus(201)
}

export async function getAllNotes(req: Request, res: Response) {
  const notes = await getNotes()

  res.send(notes).status(200)
}