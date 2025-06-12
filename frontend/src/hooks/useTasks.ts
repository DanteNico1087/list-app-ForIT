import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../api/tasksApi';
import type { Task } from '../types';

/** Hook para listar tareas */
export const useTasks = () => {
  return useQuery<Task[], Error>({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  });
};

/** Hook para crear una tarea */
export const useCreateTask = () => {
  const qc = useQueryClient();
  return useMutation(createTask, {
    onSuccess: () => qc.invalidateQueries(['tasks']),
  });
};

/** Hook para actualizar una tarea */
export const useUpdateTask = () => {
  const qc = useQueryClient();
  return useMutation(updateTask, {
    onSuccess: () => qc.invalidateQueries(['tasks']),
  });
};

/** Hook para eliminar una tarea */
export const useDeleteTask = () => {
  const qc = useQueryClient();
  return useMutation(deleteTask, {
    onSuccess: () => qc.invalidateQueries(['tasks']),
  });
};
