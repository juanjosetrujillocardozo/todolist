import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';

test('renders TaskForm and handles submission', () => {
  const handleSubmit = jest.fn();
  const { getByLabelText, getByRole } = render(
    <TaskForm onSubmit={handleSubmit} />
  );

  fireEvent.change(getByLabelText(/task name/i), {
    target: { value: 'New Task' },
  });
  fireEvent.click(getByRole('button'));

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({ name: 'New Task' });
});
