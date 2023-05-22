import { useEffect, useState } from "react";
import { IAuthProvider } from "../types/AuthProvider";
import { IUser } from "../types/User";
import { AuthContext } from "../contexts/AuthContext";
import { loginRequest } from "../utils/loginRequest";
import { setUserLocalStorage } from "../utils/setUserLocalStorage";
import { getUserLocalStorage } from "../utils/getUserLocalStorage";

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  const authenticate = async (email: string, password: string) => {
    const response = await loginRequest(email, password);

    const payload = { token: response.token, email };

    setUser(payload);
    setUserLocalStorage(payload);
  };

  const logout = () => {
    setUser(null);
    setUserLocalStorage(null);
  };

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
