import { useDispatch } from 'react-redux';
import { createTask } from '../redux/store';

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = { title: event.target.title.value };
    dispatch(createTask(task));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="New Task" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
