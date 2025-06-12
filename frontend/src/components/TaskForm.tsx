import { useState, FormEvent } from 'react';
import { useCreateTask } from '../hooks/useTasks';

export function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const createMutation = useCreateTask();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert('Título y descripción son obligatorios.');
      return;
    }
    createMutation.mutate(
      { title: title.trim(), description: description.trim() },
      {
        onSuccess: () => {
          setTitle('');
          setDescription('');
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-4 border rounded-lg bg-white shadow"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded p-2"
          placeholder="Ej. Comprar pan"
          disabled={createMutation.isPending}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Descripción</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded p-2"
          placeholder="Ej. Ir a la panadería a las 3pm"
          rows={3}
          disabled={createMutation.isPending}
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={createMutation.isPending}
      >
        {createMutation.isPending ? 'Guardando...' : 'Agregar tarea'}
      </button>
      {createMutation.isError && (
        <p className="mt-2 text-red-600">
          Error: {createMutation.error?.message}
        </p>
      )}
    </form>
  );
}
