import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from './store';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilters from './TaskFilters';

const App = () => {
  const [currentTask, setCurrentTask] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark bg-gray-800 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <header className="flex justify-between items-center p-4 shadow-md bg-blue-500 text-white">
        <h1 className="text-2xl font-bold">To-Do List</h1>
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-700 rounded hover:bg-gray-600"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main className="max-w-2xl mx-auto p-4">
        <TaskForm currentTask={currentTask} setCurrentTask={setCurrentTask} />
        <TaskFilters />
        <TaskList setCurrentTask={setCurrentTask} />
      </main>
    </div>
  );
};

export default App;
