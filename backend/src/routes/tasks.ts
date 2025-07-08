// backend/src/routes/tasks.ts
import { Router, Request, Response, NextFunction } from 'express';
import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  TaskInput,
  TaskUpdate,
} from '../services/taskService';

const router = Router();

// GET /api/tasks
router.get('/', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

// POST /api/tasks
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const input: TaskInput = req.body;
    if (!input.title || !input.description) {
      return res.status(400).json({ error: 'title y description son obligatorios.' });
    }
    const newTask = await createTask(input);
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
});

// PUT /api/tasks/:id
router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const update: TaskUpdate = { id: req.params.id, ...req.body };
    const updated = await updateTask(update);
    res.json(updated);
  } catch (err: any) {
    if (err.code === 'P2025') {
      // Prisma record not found
      return res.status(404).json({ error: 'Tarea no encontrada.' });
    }
    next(err);
  }
});

// DELETE /api/tasks/:id
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deleted = await deleteTask(req.params.id);
    res.json(deleted);
  } catch (err: any) {
    if (err.code === 'P2025') {
      return res.status(404).json({ error: 'Tarea no encontrada.' });
    }
    next(err);
  }
});

export default router;
