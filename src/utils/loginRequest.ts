import { API } from "../services/api";

export const loginRequest = async (email: string, password: string) => {
  try {
    const request = await API.post("/login", { email, password });

    return request.data;
  } catch (error) {
    return null;
  }
};
