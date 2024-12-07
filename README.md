#### Todo Application

### 1. Description
This project is a Todo App developed as part of a technical test for the Full Stack Developer position. The application allows task management with key functionalities such as creating, viewing, editing, and deleting tasks, integrating a React frontend with a Spring Boot backend.

### 2. Prerequisites
Make sure you have the following installed before starting:
## Backend
- Java 17 or later
- Apache Maven 3.6.3 or later
## Frontend
- Node.js v18.x or later
- npm (Node.js package manager)

### 3. Backend Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/juanjosetrujillocardozo/todolist
2. **Navigate to the backend directory**:
   ```bash
   cd todo-app/backend
3. **Compile and run tests**:
   ```bash
   ./mvnw test
4. **Start the server**:
   ```bash
   ./mvnw spring-boot:run
5. **Base API URL**: The server will be available at:
   ```bash
   http://localhost:8080/api/v1
Ensure the server is running properly before proceeding with the frontend.

---

### **4. Frontend Setup**
1. **Navigate to the frontend directory**:
   ```bash
   cd todo-app/frontend
2. **Install dependencies**:
   ```bash
    npm install
3. **Start the application**:
   ```bash
   npm start
4. **Backend connection setup**: In the axiosConfig.js file, ensure the backend URL is set to:
   ```bash
   baseURL: 'http://localhost:8080/api/v1',

---

### **5. Features**
1. **Task Management**
   - Create a task with a title and description.
   - View all tasks in a list.
   - Edit existing tasks.
   - Delete tasks from the list.
2. **Filters**
   - Filter tasks by their status: completed, pending, or all.
3. **User Interface**
   - Responsive design using TailwindCSS.
   - Smooth and user-friendly interactions.
4. **API**
   - RESTful endpoints connecting the backend for task data management.
5. **Testing**
   - Unit and integration tests for both frontend and backend.

### **6. Project Architecture**
1. **Frontend**: React application.
   - Directory: `frontend/`
   - Components: `src/components`
   - Style configuration: `tailwind.config.js`
2. **Backend**: Spring Boot server.
   - Directory: `backend/`
   - Controllers: `src/main/java/com/example/tasks/controller`
   - Services: `src/main/java/com/example/tasks/service`
   - Tests: `src/test/java/com/example/tasks`
Both modules communicate through the backend's RESTful API.

### **7. Usage Instructions**
1. **Access the application in your browser at**:
   ```bash
   http://localhost:3000
2. **Create Tasks**:
- Use the form at the top to add new tasks.
3. **View Tasks**:
- Tasks are displayed in an organized list.
4. **Filter Tasks**:
- Use the filter buttons to switch between "completed", "pending", or "all" tasks.
5. **Edit or Delete Tasks**:
- Use the respective buttons next to each task.
6. **H2 Console (Optional)**:
- If you need to inspect the database, access:
  ```
  http://localhost:8080/h2-console
  ```
- Configuration:
  - **JDBC URL**: `jdbc:h2:mem:tasksdb`
  - **User**: `sa`
  - **Password**: *(empty by default)*

### **8. Testing**
- To run backend unit tests:
   ```bash
   ./mvnw test

## Frontend
- To run frontend tests:
   ```bash
   npm test

## Expected Results
- **Backend Tests**: BUILD SUCCESS
- **Frontend Tests**: All tests should pass successfully.

---

### **9. Conclusion**
This project implements all the required functionalities specified in the technical test, including complete integration between the frontend and backend, as well as tests to validate its functionality. It is designed to be easily extensible and deployable.

