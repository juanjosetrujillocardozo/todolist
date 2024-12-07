// src/mocks/server.js
import { setupServer } from 'msw/node';
import { rest } from 'msw';

export const server = setupServer(
  // Mock GET request for tasks
  rest.get('http://localhost:8080/api/v1/tasks', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, title: 'Test Task 1', completed: false },
        { id: 2, title: 'Test Task 2', completed: true }
      ])
    );
  }),

  // Mock POST request for adding a task
  rest.post('http://localhost:8080/api/v1/tasks', (req, res, ctx) => {
    const newTask = req.body;
    return res(ctx.status(201), ctx.json(newTask));
  })
);
