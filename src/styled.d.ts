import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    border: {
      radius: string;
      color: string;
    };

    font: {
      family: string;
      light: number;
      normal: number;
      mediun: number;
      semiBold: number;
      Bold: number;
      extraBold: number;

      sizes: {
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        big: string;
      };
    };

    colors: {
      primary: string;
      black: string;
      gray: string;
      white: string;
      red: string;
      green: string;
    };
  }
}
