import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { fetchTasks } from './redux/store';

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Todo App</h1>
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
