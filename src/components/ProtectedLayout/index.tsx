import { useAuth } from "../../hooks/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.email) {
    return <h1>Não tem acesso</h1>;
  }

  return children;
};
