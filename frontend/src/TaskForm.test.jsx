import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TaskForm from './TaskForm';

const mockStore = configureStore([]);
const mockCreateTask = jest.fn();

test('renders TaskForm and submits data', () => {
  const store = mockStore({});
  const { getByPlaceholderText, getByRole } = render(
    <Provider store={store}>
      <TaskForm createTask={mockCreateTask} />
    </Provider>
  );

  const titleInput = getByPlaceholderText(/New Task Title/i);
  const descriptionInput = getByPlaceholderText(/New Task Description/i);
  const submitButton = getByRole('button', { name: /Add Task/i });

  fireEvent.change(titleInput, { target: { value: 'Test Task Title' } });
  fireEvent.change(descriptionInput, { target: { value: 'Test Task Description' } });
  fireEvent.click(submitButton);

  expect(mockCreateTask).toHaveBeenCalledWith({
    title: 'Test Task Title',
    description: 'Test Task Description',
  });
  expect(mockCreateTask).toHaveBeenCalledTimes(1);
});
