import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

const mockStore = configureStore([]);

test('integrates TaskForm and TaskList', () => {
  const store = mockStore({
    tasks: [
      { id: 1, title: 'Existing Task', description: 'Existing Description', completed: false },
    ],
  });

  const { getByPlaceholderText, getByRole, getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Add a new task
  const titleInput = getByPlaceholderText(/New Task Title/i);
  const descriptionInput = getByPlaceholderText(/New Task Description/i);
  const submitButton = getByRole('button', { name: /Add Task/i });

  fireEvent.change(titleInput, { target: { value: 'New Task' } });
  fireEvent.change(descriptionInput, { target: { value: 'New Description' } });
  fireEvent.click(submitButton);

  // Check if the new task appears in the list
  setTimeout(() => {
    expect(getByText(/New Task/i)).toBeInTheDocument();
    expect(getByText(/New Description/i)).toBeInTheDocument();
  }, 3000);
});
