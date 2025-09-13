import axios from 'axios';

export const myAxios = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});
