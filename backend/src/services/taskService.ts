// backend/src/services/taskService.ts
import { PrismaClient, Task as PrismaTask } from '@prisma/client';

const prisma = new PrismaClient();

export type TaskInput = {
  title: string;
  description: string;
};

export type TaskUpdate = Partial<Omit<PrismaTask, 'createdAt'>> & { id: string };

/** Obtener todas las tareas */
export const getAllTasks = async (): Promise<PrismaTask[]> => {
  return prisma.task.findMany({ orderBy: { createdAt: 'desc' } });
};

/** Crear una nueva tarea */
export const createTask = async (input: TaskInput): Promise<PrismaTask> => {
  return prisma.task.create({
    data: {
      title: input.title,
      description: input.description,
    },
  });
};

/** Actualizar una tarea existente */
export const updateTask = async (task: TaskUpdate): Promise<PrismaTask> => {
  return prisma.task.update({
    where: { id: task.id },
    data: {
      title: task.title,
      description: task.description,
      completed: task.completed,
    },
  });
};

/** Eliminar una tarea por ID */
export const deleteTask = async (id: string): Promise<PrismaTask> => {
  return prisma.task.delete({ where: { id } });
};
