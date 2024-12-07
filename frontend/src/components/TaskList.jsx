import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/taskSlice';

const TaskList = ({ tasks }) => {
  const dispatch = useDispatch();

  if (!tasks.length) {
    return <p className="text-gray-500">No tasks available.</p>;
  }

  return (
    <ul className="w-full max-w-md">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center border-b py-2"
        >
          <span
            className={`cursor-pointer ${task.completed ? 'line-through' : ''}`}
            onClick={() => dispatch(toggleTask(task.id))}
          >
            {task.title}
          </span>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="text-red-500"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
