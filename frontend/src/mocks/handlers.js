// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  // Ejemplo de endpoint para obtener tareas
  rest.get('http://localhost:8080/api/v1/tasks', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true },
      ])
    );
  }),

  // Ejemplo de endpoint para crear una tarea
  rest.post('http://localhost:8080/api/v1/tasks', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({ id: 3, title: 'New Task', completed: false })
    );
  }),
];
