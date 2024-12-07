import React from 'react';

const TaskList = ({ tasks }) => {
  if (!tasks.length) {
    return <p className="text-center">No tasks available.</p>;
  }

  return (
    <ul className="list-disc pl-5">
      {tasks.map((task) => (
        <li key={task.id} className="p-2">
          {task.title}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
