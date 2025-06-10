import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

const tasks: Task[] = [];
const router = Router();

// GET /api/tasks
router.get('/', (_req: Request, res: Response) => {
  res.json(tasks);
});

// POST /api/tasks
router.post('/', (req: Request, res: Response) => {
  const { title, description } = req.body;
  if (!title || !description) {
    res.status(400).json({ error: 'title y description son obligatorios.' });
    return;
  }
  const newTask: Task = {
    id: uuidv4(),
    title,
    description,
    completed: false,
    createdAt: new Date(),
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /api/tasks/:id
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const idx = tasks.findIndex(t => t.id === id);
  if (idx === -1) {
    res.status(404).json({ error: 'Tarea no encontrada.' });
    return;
  }
  if (title !== undefined)       tasks[idx].title = title;
  if (description !== undefined) tasks[idx].description = description;
  if (completed !== undefined)   tasks[idx].completed = completed;
  res.json(tasks[idx]);
});

// DELETE /api/tasks/:id
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const idx = tasks.findIndex(t => t.id === id);
  if (idx === -1) {
    res.status(404).json({ error: 'Tarea no encontrada.' });
    return;
  }
  const [deleted] = tasks.splice(idx, 1);
  res.json(deleted);
});

export default router;
