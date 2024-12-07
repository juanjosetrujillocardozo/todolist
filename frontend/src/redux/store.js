import { configureStore, createStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice'; // Cambiado para usar el archivo correcto


const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;

/*createStore(taskReducer);*/