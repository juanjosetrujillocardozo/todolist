import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api', // Cambia esto si el backend está en otro puerto o servidor
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
