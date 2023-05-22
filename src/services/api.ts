import axios from "axios";
import { getUserLocalStorage } from "../utils/getUserLocalStorage";

export const API = axios.create({
  baseURL: import.meta.env.SERVICES_API,
});

API.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage();

    config.headers.Authorization = user?.token;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
