import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../redux/taskSlice';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      // Enviar la tarea al backend
      dispatch(createTask({ title, description }));
      // Limpiar el formulario
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 mb-6"
    >
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">Add New Task</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
          Task Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          rows="3"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
