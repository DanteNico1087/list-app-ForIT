import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';

export default function App() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        List App ForIT
      </h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}
