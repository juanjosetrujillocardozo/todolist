import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

test('renders Todo App heading', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const heading = screen.getByText(/Todo App/i);
  expect(heading).toBeInTheDocument();
});
