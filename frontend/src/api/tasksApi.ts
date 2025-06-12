import axiosClient from './axiosClient';
import type { Task } from '../types';

/** Obtiene todas las tareas */
export const fetchTasks = async (): Promise<Task[]> => {
  const { data } = await axiosClient.get<Task[]>('/api/tasks');
  return data;
};

/** Crea una tarea */
export const createTask = async (input: {
  title: string;
  description: string;
}): Promise<Task> => {
  const { data } = await axiosClient.post<Task>('/api/tasks', input);
  return data;
};

/** Actualiza una tarea */
export const updateTask = async (task: Partial<Omit<Task, 'createdAt'>> & { id: string }): Promise<Task> => {
  const { data } = await axiosClient.put<Task>(`/api/tasks/${task.id}`, task);
  return data;
};

/** Elimina una tarea */
export const deleteTask = async (id: string): Promise<Task> => {
  const { data } = await axiosClient.delete<Task>(`/api/tasks/${id}`);
  return data;
};
