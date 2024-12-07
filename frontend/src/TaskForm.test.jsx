import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskForm from './components/TaskForm';

test('renders TaskForm and handles submission', () => {
  const { getByPlaceholderText, getByRole } = render(
    <Provider store={store}>
      <TaskForm />
    </Provider>
  );

  const input = getByPlaceholderText(/New Task/i);
  const button = getByRole('button', { name: /Add Task/i });

  fireEvent.change(input, { target: { value: 'Test Task' } });
  fireEvent.click(button);

  setTimeout(() => {
    expect(input.value).toBe('');
  }, 3000);
});
