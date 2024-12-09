import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TaskList from './TaskList';

const mockStore = configureStore([]);
const mockToggleTask = jest.fn();
const mockDeleteTask = jest.fn();

test('renders TaskList and interacts with tasks', () => {
  const store = mockStore({
    tasks: [
      { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
      { id: 2, title: 'Task 2', description: 'Description 2', completed: true },
    ],
  });

  const { getByText, getAllByText } = render(
    <Provider store={store}>
      <TaskList toggleTask={mockToggleTask} deleteTask={mockDeleteTask} />
    </Provider>
  );

  // Check if tasks are rendered
  expect(getByText(/Task 1/i)).toBeInTheDocument();
  expect(getByText(/Task 2/i)).toBeInTheDocument();

  // Simulate toggling a task
  const toggleButtons = getAllByText(/Toggle/i);
  fireEvent.click(toggleButtons[0]);
  expect(mockToggleTask).toHaveBeenCalledWith(1);

  // Simulate deleting a task
  const deleteButtons = getAllByText(/Delete/i);
  fireEvent.click(deleteButtons[1]);
  expect(mockDeleteTask).toHaveBeenCalledWith(2);
});
