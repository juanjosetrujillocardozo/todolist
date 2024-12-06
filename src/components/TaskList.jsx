import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from './store';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskList = ({ setCurrentTask }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const reorderedTasks = Array.from(tasks);
    const [removed] = reorderedTasks.splice(source.index, 1);
    reorderedTasks.splice(destination.index, 0, removed);

    // Update the order in the Redux store
    reorderedTasks.forEach((task, index) => {
      task.order = index; // Assuming `order` field exists for tasks
    });

    // Trigger updates in the Redux store
    reorderedTasks.forEach((task) => dispatch(updateTask(task)));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="taskList">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-2"
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between"
                  >
                    <div>
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() =>
                          dispatch(
                            updateTask({ ...task, completed: !task.completed })
                          )
                        }
                        className="mr-2"
                      />
                      <span
                        className={
                          task.completed ? 'line-through text-gray-500' : ''
                        }
                      >
                        {task.title}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setCurrentTask(task)}
                        className="p-2 text-sm text-white bg-green-500 rounded hover:bg-green-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => dispatch(updateTask(task))}
                        className="p-2 text-sm text-white bg-red-500 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
