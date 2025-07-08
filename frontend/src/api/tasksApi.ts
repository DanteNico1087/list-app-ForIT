// frontend/src/api/tasksApi.ts
import axiosClient from './axiosClient';
import type { Task } from '../types';

/** GET /api/tasks */
export const fetchTasks = async (): Promise<Task[]> => {
  const { data } = await axiosClient.get<Task[]>('/tasks');  // <-- /tasks
  return data;
};

/** POST /api/tasks */
export const createTask = async (input: {
  title: string;
  description: string;
}): Promise<Task> => {
  const { data } = await axiosClient.post<Task>('/tasks', input); // <-- /tasks
  return data;
};

/** PUT /api/tasks/:id */
export const updateTask = async (
  task: Partial<Omit<Task, 'createdAt'>> & { id: string }
): Promise<Task> => {
  const { data } = await axiosClient.put<Task>(`/tasks/${task.id}`, task); // <-- /tasks/:id
  return data;
};

/** DELETE /api/tasks/:id */
export const deleteTask = async (id: string): Promise<Task> => {
  const { data } = await axiosClient.delete<Task>(`/tasks/${id}`); // <-- /tasks/:id
  return data;
};
