import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const BlogTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0D6E6E", // primary-100
      light: "#4a9d9c", // primary-200
      contrastText: "#FFFFFF", // text-100
    },
    secondary: {
      main: "#FF3D3D", // accent-100
      light: "#ffe0c8", // accent-200
    },
    background: {
      default: "#0D1F2D", // bg-100
      paper: "#1d2e3d", // bg-200
    },
    text: {
      primary: "#FFFFFF", // text-100
      secondary: "#e0e0e0", // text-200
    },
    divider: "#354656", // bg-300
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0D1F2D", // bg-100
          color: "#FFFFFF", // text-100
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          },
        },
        "*": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 14,
  },
});

interface Props {
  children: React.ReactNode;
}

const BlogThemeProvider = ({ children }: Props) => (
  <ThemeProvider theme={BlogTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default BlogThemeProvider;
