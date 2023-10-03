import { Request, Response } from 'express'
import { Note } from '@prisma/client'
import { getNotes, insertNote } from '../repositories/noteRepository.js'

export type NoteData = Omit<Note, 'id' | 'createdAt' | 'updatedAt'>

export async function createNewNote(req: Request, res: Response) {
  const {title, description, categoryName, image}: NoteData = req.body

  await insertNote({title, description, categoryName, image})

  res.sendStatus(201)
}

export async function getAllNotes(req: Request, res: Response) {
  const notes = await getNotes()

  res.send(notes).status(200)
}