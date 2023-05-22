import { createContext } from "react";
import { IContext } from "../types/Context";

export const AuthContext = createContext<IContext>({} as IContext);
