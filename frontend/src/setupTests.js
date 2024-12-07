// src/setupTests.js
import '@testing-library/jest-dom';
import { server } from './mocks/server';

// Inicia el servidor antes de todas las pruebas
beforeAll(() => server.listen());

// Resetea cualquier controlador de solicitud después de cada prueba
afterEach(() => server.resetHandlers());

// Detiene el servidor después de que se completen todas las pruebas
afterAll(() => server.close());
