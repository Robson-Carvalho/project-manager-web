import { AuthProvider } from "./providers/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global.style";
import { theme } from "./styles/theme";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <BrowserRouter>
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};
