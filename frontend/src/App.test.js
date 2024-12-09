import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

const mockStore = configureStore([]);

test('renders App and checks for main elements', () => {
  const store = mockStore({
    tasks: [
      { id: 1, title: 'Task 1', description: 'Test Task 1', completed: false },
      { id: 2, title: 'Task 2', description: 'Test Task 2', completed: true },
    ],
  });

  const { getByText, getByRole } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Validates header rendering
  expect(getByText(/Todo App/i)).toBeInTheDocument();

  // Validates form rendering
  expect(getByRole('button', { name: /Add Task/i })).toBeInTheDocument();

  // Validates task list rendering
  expect(getByText(/Task 1/i)).toBeInTheDocument();
  expect(getByText(/Task 2/i)).toBeInTheDocument();
});
