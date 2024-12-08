import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../axiosConfig";

// Thunk to fetch tasks from the backend
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await instance.get("/tasks");
  return response.data;
});

// Thunk to create a new task
export const createTask = createAsyncThunk("tasks/createTask", async (task) => {
  const response = await instance.post("/tasks", task);
  return response.data;
});

// Thunk to toggle task completion
export const toggleTask = createAsyncThunk("tasks/toggleTask", async (taskId) => {
  const response = await instance.put(`/tasks/${taskId}/toggle`);
  return response.data;
});

// Thunk to delete a task
export const deleteTask = createAsyncThunk("tasks/deleteTask", async (taskId) => {
  await instance.delete(`/tasks/${taskId}`);
  return taskId;
});

// Slice definition
const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch tasks
      .addCase(fetchTasks.fulfilled, (state, action) => action.payload)
      // Create task
      .addCase(createTask.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      // Toggle task
      .addCase(toggleTask.fulfilled, (state, action) => {
        const index = state.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      // Delete task
      .addCase(deleteTask.fulfilled, (state, action) => {
        return state.filter((task) => task.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
