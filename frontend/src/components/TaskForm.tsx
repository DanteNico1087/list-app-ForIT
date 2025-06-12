import { useCreateTask } from '../hooks/useTasks';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { TaskFormData } from '../schemas/taskShema';
import { taskSchema } from '../schemas/taskShema';

export function TaskForm() {
  const createMutation = useCreateTask();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = async (data: TaskFormData) => {
    await createMutation.mutateAsync(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-6 p-4 border rounded-lg bg-white shadow"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Título</label>
        <input
          type="text"
          {...register('title')}
          className="w-full border rounded p-2"
          placeholder="Ej. Comprar pan"
          disabled={isSubmitting}
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">
            {errors.title.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Descripción</label>
        <textarea
          {...register('description')}
          className="w-full border rounded p-2"
          placeholder="Ej. Ir a la panadería a las 3pm"
          rows={3}
          disabled={isSubmitting}
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Guardando...' : 'Agregar tarea'}
      </button>
      {createMutation.isError && (
        <p className="mt-2 text-red-600">
          Error: {createMutation.error?.message}
        </p>
      )}
    </form>
  );
}
