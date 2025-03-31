import { createTheme } from "@mui/material/styles";

const commonTheme = (palette: any) => ({
  typography: {
    h1: {
      fontSize: "2.25rem", // Equivalente a text-4xl en Tailwind
      fontWeight: "bold",
      marginBottom: "1rem", // mb-4
      "@media (min-width: 768px)": {
        fontSize: "3.75rem", // Equivalente a md:text-6xl en Tailwind
      },
      color: palette.primary.main
    },
    h2: {
      fontWeight: "bold",
      "@media (min-width: 768px)": {
        fontSize: "3rem",
      },
    },
    body1: {
      fontSize: "1.25rem", // text-xl (móvil)
      "@media (min-width: 768px)": {
        fontSize: "1.5rem", // text-2xl (md+)
      },
      color: palette.secondary.main
    },
    body2: {
      fontSize: "1rem", // text-xl (móvil)
      "@media (min-width: 768px)": {
        fontSize: "1.25rem", // text-2xl (md+)
      },
      color: palette.secondary.main
    },
  }
});

const lightTheme = createTheme({
  ...commonTheme({
    primary: { main: "#1e3a8a" }, // Azul oscuro para títulos
    secondary: { main: "#374151" }, // Gris oscuro para subtítulos
  }),
  palette: {
    mode: "light",
    primary: {
      main: "#1e3a8a",
      contrastText: "#f3f4f6",
    },
    secondary: {
      main: "#111827",
    },
    background: {
      default: "#f3f4f6",
      paper: "#e2efe5",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: "all 0.3s ease", // Transición global
        },
      },
    },
  },
});

const darkTheme = createTheme({
  ...commonTheme({
    primary: { main: "#f3f4f6" }, // Azul claro para títulos
    secondary: { main: "#d1d5db" }, // Gris claro para subtítulos
  }),
  palette: {
    mode: "dark",
    primary: {
      main: "#f3f4f6",
      contrastText: "#1e3a8a",
    },
    background: {
      default: "#111827",
      paper: "#1f1f1f",
    },
  },
});

export { lightTheme, darkTheme };
