import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: string;
    colors: {
      primary: string;
      secondary: string;
      heading: string;
      border: string;
      gray: string;
      font: string;
      subFont: string;
      inactive: string;
      overlay: string;
    };
    constants: {
      fontSize: {
        pageTitle: number;
      };
    };
  }
}
