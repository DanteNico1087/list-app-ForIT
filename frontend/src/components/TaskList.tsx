import type { FC } from 'react';
import { useTasks, useUpdateTask, useDeleteTask } from '../hooks/useTasks';
import { TaskItem } from './TaskItem';

export const TaskList: FC = () => {
  const { data: tasks, isLoading, isError, error } = useTasks();
  const updateMutation = useUpdateTask();
  const deleteMutation = useDeleteTask();

  if (isLoading) {
    return <p className="p-4 text-center">Cargando tareas...</p>;
  }
  if (isError) {
    return (
      <p className="p-4 text-center text-red-600">
        Error al cargar: {error?.message}
      </p>
    );
  }
  if (!tasks || tasks.length === 0) {
    return <p className="p-4 text-center">No hay tareas aún.</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={t => updateMutation.mutate(t)}
          onDelete={id => deleteMutation.mutate(id)}
        />
      ))}
    </ul>
  );
};
