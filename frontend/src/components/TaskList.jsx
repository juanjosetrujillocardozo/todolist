import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/taskSlice';

const TaskList = ({ tasks }) => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('all');

  // Filtrar tareas según el estado seleccionado
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-700">Tasks</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded ${
              filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-3 py-1 rounded ${
              filter === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-3 py-1 rounded ${
              filter === 'pending' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Pending
          </button>
        </div>
      </div>
      <ul className="divide-y divide-gray-200 bg-white shadow-md rounded-lg p-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center py-2 ${
                task.completed ? 'bg-green-50' : ''
              }`}
            >
              <div>
                <h3
                  className={`cursor-pointer text-lg ${
                    task.completed ? 'line-through text-green-600' : ''
                  }`}
                  onClick={() => dispatch(toggleTask(task.id))}
                >
                  {task.title}
                </h3>
                <p className="text-sm text-gray-500">{task.description}</p>
              </div>
              <button
                onClick={() => dispatch(deleteTask(task.id))}
                className="text-red-500 hover:text-red-700 transition"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No tasks to display.</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
