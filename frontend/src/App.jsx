import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from './redux/taskSlice';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <header className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Todo App</h1>
        <p className="text-gray-500 mt-2">Manage your tasks efficiently</p>
      </header>
      <main className="w-full max-w-4xl space-y-6">
        {/* Formulario para agregar tareas */}
        <TaskForm />
        {/* Lista de tareas */}
        <TaskList tasks={tasks} />
      </main>
      <footer className="w-full text-center mt-8 text-gray-400">
        <p>© {new Date().getFullYear()} Todo App - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
