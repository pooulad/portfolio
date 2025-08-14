import { createContext, useMemo, useState } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import Vazirmatn from "../../assets/fonts/Vazirmatn.ttf";
import Orbitron from "../../assets/fonts/Orbitron.ttf";

declare module "@mui/material/styles" {
  interface Palette {
    thirdary: object;
    fourthary: object;
  }
  interface PaletteOptions {
    thirdary: object;
    fourthary: object;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    thirdary: true;
    fourthary: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    fourthary: true;
  }
}
interface Props {
  children: React.ReactNode;
}

type themeColor = "light" | "dark";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

export const cacheLtr = createCache({
  key: "muiltr",
  stylisPlugins: [],
});

const Theme: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<themeColor>("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: themeColor) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  localStorage.setItem("theme", mode);
  const theme = useMemo(
    () =>
      createTheme({
        direction: "rtl",
        typography: {
          fontFamily: ["Vazirmatn", "Orbitron"].join(","),
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              "@font-face": [
                {
                  fontFamily: "Vazirmatn",
                  fontStyle: "normal",
                  fontDisplay: "swap",
                  fontWeight: 400,
                  src: `url(${Vazirmatn}) format("truetype")`,
                  unicodeRange:
                    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
                },
                {
                  fontFamily: "Orbitron",
                  fontStyle: "normal",
                  fontDisplay: "swap",
                  fontWeight: 400,
                  src: `url(${Orbitron}) format("truetype")`,
                  unicodeRange:
                    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
                },
              ],
              body: {
                a: {
                  textDecoration: "none",
                  color: "inherit",
                },
                "::-webkit-scrollbar": {
                  borderRadius: "10px",
                  width: "6px",
                },
                "::-webkit-scrollbar-track": {
                  borderRadius: "10px",
                  backdropFilter: "blur(4px)",
                },
                "::-webkit-scrollbar-thumb": {
                  borderRadius: "10px",
                  backgroundColor: "#33691E",
                },
              },
            },
          },
        },
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: {
                  main: "#7CB342",
                  contrastText: "#ffffff",
                },
                secondary: {
                  main: "#33691E",
                },
                thirdary: {
                  main: "#558B2F",
                  contrastText: "#ffffff",
                },
                fourthary: {
                  main: "#AED581",
                },
                success: {
                  main: "#43A047",
                },
                error: {
                  main: "#E53935",
                },
                background: {
                  paper: "#FAFAFA",
                  default: "#FFFFFF",
                },
                action: {
                  disabled: "#DDE8D1",
                },
                text: {
                  primary: "#000000",
                  secondary: "#181616ff",
                  disabled: "#B0BEC5",
                },
                divider: "#C5E1A5",
              }
            : {
                primary: {
                  main: "#7CB342",
                  contrastText: "#000000",
                },
                secondary: {
                  main: "#C5E1A5",
                },
                thirdary: {
                  main: "#9CCC65",
                },
                fourthary: {
                  main: "#33691E",
                },
                success: {
                  main: "#66BB6A",
                },
                error: {
                  main: "#EF5350",
                },
                background: {
                  paper: "#1B1B1B",
                  default: "#121212",
                },
                action: {
                  disabled: "#445A2B",
                },
                text: {
                  primary: "#E0F2F1",
                  secondary: "#B2DFDB",
                  disabled: "#789262",
                },
                divider: "#4CAF50",
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Theme;
