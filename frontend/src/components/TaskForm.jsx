import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../redux/taskSlice';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(createTask({ title }));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Task"
        className="border rounded px-2 py-1 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;