# To-Do List Application

## Description
A To-Do List application built using React for the frontend and Spring Boot for the backend. This project demonstrates a complete implementation of a CRUD-based task management system with a responsive and visually appealing design.

## Requirements
- Node.js (version 16+)
- Java 17+
- Maven
- Postman (optional, for API testing)

## Features
- **Frontend**:
  - Add, edit, delete tasks.
  - Filter tasks (All, Completed, Pending).
  - Dark and Light themes.
  - Responsive design for mobile and desktop.
- **Backend**:
  - RESTful API for task management.
  - Data persistence with H2 Database.
  - Validation and error handling.
  - Clean architecture principles.

## Backend Setup
1. Navigate to the `backend` directory.
2. Open the terminal and run:
   ```bash
   ./mvnw spring-boot:run
3. The server will be available at 
   ```bash
   http://localhost:8080.

## API Endpoints
- **GET /api/tasks**: Retrieve all tasks.
- **POST /api/tasks**: Create a new task.
  - Example payload:
  ```bash
  {
  "title": "New Task",
  "description": "Task details"
  }
- **PUT /api/tasks/{id}**: Update a task.
- **DELETE /api/tasks/{id}**: Delete a task.

## Frontend Setup
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
3. Start the application:
   ```bash
   npm start
4. Open your browser and navigate to
   ```bash
   http://localhost:3000

## Testing

### Backend
Run the backend tests with:
2. Install dependencies:
   ```bash
   npm install
3. Start th

### Frontend
Run the frontend tests with:
```bash
npm test