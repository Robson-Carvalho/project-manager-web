import { AuthProvider } from "./providers/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProtectedLayout } from "./components/ProtectedLayout";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global.style";
import { variables } from "./styles/variables";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { SignIn } from "./pages/SignIn";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={variables}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/login" element={<Login />} />

              <Route path="/signin" element={<SignIn />} />

              <Route
                path="/profile"
                element={
                  <ProtectedLayout>
                    <Profile />
                  </ProtectedLayout>
                }
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};
