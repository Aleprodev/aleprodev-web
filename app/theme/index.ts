import { createTheme } from "@mui/material/styles";

const commonTheme = {
  typography: {
    h1: {
      fontSize: "2.25rem", // Equivalente a text-4xl en Tailwind
      fontWeight: "bold",
      marginBottom: "1rem", // mb-4
      "@media (min-width: 768px)": {
        fontSize: "3.75rem", // Equivalente a md:text-6xl en Tailwind
      },
    },
    body1: {
      fontSize: "1.25rem", // text-xl (móvil)
      "@media (min-width: 768px)": {
        fontSize: "1.5rem", // text-2xl (md+)
      },
    },
    body2: {
      fontSize: "1rem", // text-xl (móvil)
      "@media (min-width: 768px)": {
        fontSize: "1.25rem", // text-2xl (md+)
      },
    },
  }
};

const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb",
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
  ...commonTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#2563eb",
      contrastText: "#f3f4f6",
    },
    background: {
      default: "#111827",
      paper: "#1f1f1f",
    },
  },
});

export { lightTheme, darkTheme };
