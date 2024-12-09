import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../axiosConfig';

// Fetch tasks
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await instance.get('/tasks');
  return response.data;
});

// Create a new task
export const createTask = createAsyncThunk('tasks/createTask', async (task) => {
  const response = await instance.post('/tasks', task);
  return response.data;
});

// Update an existing task
export const updateTask = createAsyncThunk('tasks/updateTask', async ({ id, title, description }) => {
  const response = await instance.put(`/tasks/${id}`, { title, description });
  return response.data;
});

// Toggle task completion
export const toggleTask = createAsyncThunk('tasks/toggleTask', async (taskId) => {
  const response = await instance.patch(`/tasks/${taskId}/toggle`);
  return response.data;
});

// Delete a task
export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId) => {
  await instance.delete(`/tasks/${taskId}`);
  return taskId;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => action.payload)
      .addCase(createTask.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(toggleTask.fulfilled, (state, action) => {
        const index = state.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        return state.filter((task) => task.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
