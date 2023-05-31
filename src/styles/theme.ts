import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  border: {
    radius: "0.4rem",
    color: "#8E8383",
  },

  font: {
    family: "Inter",
    light: 300,
    normal: 400,
    mediun: 500,
    semiBold: 600,
    Bold: 700,
    extraBold: 800,

    sizes: {
      small: "0.875rem", // 14px
      medium: "1rem", // 16px
      large: "1.5rem", // 24px
      xlarge: "2rem", // 32px
      xxlarge: "3rem", //48px
      big: "4rem", //64px
    },
  },

  colors: {
    primary: "#3b82f6",
    black: "#111827",
    gray: "#555454",
    white: "#fff",
    red: "#dc2626",
    green: "#059669",
  },
};
