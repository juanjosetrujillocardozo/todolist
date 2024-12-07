import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../axiosConfig';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await instance.get('/tasks');
  return response.data;
});

export const createTask = createAsyncThunk('tasks/createTask', async (task) => {
  const response = await instance.post('/tasks', task);
  return response.data;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    toggleTask(state, action) {
      const task = state.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask(state, action) {
      return state.filter((t) => t.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => action.payload)
      .addCase(createTask.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export const { toggleTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
