import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updateTask } from './store';

const TaskList = ({ setCurrentTask }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const toggleComplete = (task) => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between">
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task)}
              className="mr-2"
            />
            <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.title}</span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => handleEdit(task)}
              className="p-2 text-sm text-white bg-green-500 rounded hover:bg-green-700"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(task.id)}
              className="p-2 text-sm text-white bg-red-500 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
