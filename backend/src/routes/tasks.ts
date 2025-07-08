import { Router } from 'express';
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
router.get('/', (req, res, next) => {
  getAllTasks()
    .then(tasks => res.json(tasks))
    .catch(next);       // next(err) para que lo capture el errorHandler
});

// POST /api/tasks
router.post('/', (req, res, next) => {
  const input: TaskInput = req.body;
  if (!input.title || !input.description) {
    return res.status(400).json({ error: 'title y description son obligatorios.' });
  }
  createTask(input)
    .then(newTask => res.status(201).json(newTask))
    .catch(next);
});

// PUT /api/tasks/:id
router.put('/:id', (req, res, next) => {
  const update: TaskUpdate = { id: req.params.id, ...req.body };
  updateTask(update)
    .then(updated => res.json(updated))
    .catch((err: any) => {
      if (err.code === 'P2025') {
        return res.status(404).json({ error: 'Tarea no encontrada.' });
      }
      next(err);
    });
});

// DELETE /api/tasks/:id
router.delete('/:id', (req, res, next) => {
  deleteTask(req.params.id)
    .then(deleted => res.json(deleted))
    .catch((err: any) => {
      if (err.code === 'P2025') {
        return res.status(404).json({ error: 'Tarea no encontrada.' });
      }
      next(err);
    });
});

export default router;
