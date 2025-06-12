import type { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onToggle: (task: Task) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li className="flex items-center justify-between p-2 border-b">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle({ ...task, completed: !task.completed })}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span className={task.completed ? 'line-through text-gray-400' : ''}>
          {task.title}
        </span>
      </label>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-600 hover:text-red-800"
      >
        Eliminar
      </button>
    </li>
  );
}
