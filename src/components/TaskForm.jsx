import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createTask, updateTask } from './store';

const TaskForm = ({ currentTask, setCurrentTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask) {
      dispatch(updateTask({ ...currentTask, title, description }));
    } else {
      dispatch(createTask({ title, description, completed: false }));
    }
    setTitle('');
    setDescription('');
    setCurrentTask(null);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-200 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        {currentTask ? 'Edit Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
