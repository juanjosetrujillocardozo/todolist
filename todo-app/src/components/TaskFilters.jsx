import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const TaskFilters = ({ setFilteredTasks }) => {
  const [filter, setFilter] = useState('all');
  const tasks = useSelector((state) => state.tasks.tasks);

  const applyFilter = (filter) => {
    setFilter(filter);
    if (filter === 'all') {
      setFilteredTasks(tasks);
    } else if (filter === 'completed') {
      setFilteredTasks(tasks.filter((task) => task.completed));
    } else if (filter === 'pending') {
      setFilteredTasks(tasks.filter((task) => !task.completed));
    }
  };

  return (
    <div className="flex justify-center space-x-4 my-4">
      <button
        onClick={() => applyFilter('all')}
        className={`p-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
      >
        All
      </button>
      <button
        onClick={() => applyFilter('completed')}
        className={`p-2 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
      >
        Completed
      </button>
      <button
        onClick={() => applyFilter('pending')}
        className={`p-2 rounded ${filter === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
      >
        Pending
      </button>
    </div>
  );
};

export default TaskFilters;
