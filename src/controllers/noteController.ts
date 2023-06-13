import { Request, Response } from 'express'
import { Note } from '@prisma/client'

export type NoteData = Omit<Note, 'id' | 'createdAt' | 'updatedAt'>

export async function createNewNote(req: Request, res: Response) {
  const {title, description, category, image}: NoteData = req.body
}