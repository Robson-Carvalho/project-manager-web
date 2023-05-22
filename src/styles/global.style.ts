import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Inter", sans-serif;
  }

  body::-webkit-scrollbar {
  width: 0px;
}
`;
