import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
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
