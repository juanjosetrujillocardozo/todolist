import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';

test('renders TaskForm and submits data', () => {
  const mockSubmit = jest.fn();
  render(<TaskForm onSubmit={mockSubmit} />);

  const input = screen.getByPlaceholderText('Title');
  fireEvent.change(input, { target: { value: 'Test Task' } });

  const button = screen.getByText('Add Task');
  fireEvent.click(button);

  expect(mockSubmit).toHaveBeenCalled();
});
