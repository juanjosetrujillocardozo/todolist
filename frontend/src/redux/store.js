import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axiosConfig';

// Define async thunk for fetching tasks
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('/tasks');
  return response.data;
});

export const createTask = createAsyncThunk('tasks/createTask', async (task) => {
  const response = await axios.post('/tasks', task);
  return response.data;
});

// Slice
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { tasks: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      });
  },
});

export const tasksReducer = tasksSlice.reducer;

// Store configuration
const store = configureStore({
  reducer: { tasks: tasksReducer },
});

export default store;
