import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from './redux/taskSlice'; // Cambiado el path para usar el archivo correcto
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Todo App</h1>
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
