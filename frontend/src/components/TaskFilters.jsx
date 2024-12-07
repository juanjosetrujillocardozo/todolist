import React from 'react';

const TaskFilters = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-2 mt-4">
      <button
        className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`px-4 py-2 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
      <button
        className={`px-4 py-2 rounded ${filter === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setFilter('pending')}
      >
        Pending
      </button>
    </div>
  );
};

export default TaskFilters;
