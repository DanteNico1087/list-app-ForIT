// frontend/src/api/axiosClient.ts
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: '/api',                // <-- Rutas relativas
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
