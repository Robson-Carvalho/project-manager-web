import { IUser } from "../types/User";

export const setUserLocalStorage = (user: IUser | null) => {
  localStorage.setItem("u", JSON.stringify(user));
};
