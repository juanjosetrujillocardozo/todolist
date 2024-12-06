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

## Backend
Run the backend tests with:
   ```bash
   ./mvnw test
   ```

## Frontend
Run the frontend tests with:
   ```bash
   npm test
   ```

## Deployment

### Backend
- Deploy the Spring Boot backend to **Render**:
  1. Create a new Web Service in Render.
  2. Connect your GitHub repository and select the backend directory.
  3. Use the following build and start commands:
     - Build: `./mvnw clean install`
     - Start: `java -jar target/<your-backend-jar>.jar`

### Frontend
- Deploy the React frontend to **Netlify**:
  1. Log in to your Netlify account.
  2. Drag and drop the build folder (generated with `npm run build`).
  3. Configure the Netlify site settings if needed.

## Additional Notes
- Ensure both the frontend and backend are running simultaneously to test the full application functionality.
- The frontend is configured to make API requests to `http://localhost:8080/api`. If deploying to a remote server, update the `baseURL` in `axiosConfig.js` accordingly.
- Remember to install all required dependencies before running the application:
  - For the backend: `./mvnw install`
  - For the frontend: `npm install`
- Test the application thoroughly, including:
  - CRUD operations for tasks.
  - Filters for viewing All, Completed, and Pending tasks.
  - Switching between Light and Dark themes.
  - Responsiveness on different devices.

## Author
Juan Jose Trujillo Cardozo  
- Email: juanjosetrujillocardozo@gmail.com  
- GitHub: [https://github.com/juanjosetrujillocardozo](https://github.com/juanjosetrujillocardozo)

## License
This project is licensed under the MIT License. You are free to use, modify, and distribute this project, provided proper attribution is given.
