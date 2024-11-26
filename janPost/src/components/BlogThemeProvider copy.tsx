import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { blueGrey, lightBlue, grey } from "@mui/material/colors";

const BlogTheme = createTheme({
  palette: {
    mode: "dark", // Enables dark mode
    primary: {
      main: lightBlue[700],
      light: lightBlue[500],
      dark: lightBlue[900],
    },
    secondary: {
      main: grey[400],
    },
    background: {
      default: blueGrey[900],
      paper: blueGrey[800],
    },
    text: {
      primary: grey[100],
      secondary: grey[400],
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    fontSize: 12, // Reduced font size for a compact look
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: lightBlue[800],
            color: grey[100],
            "& .MuiListItemIcon-root": {
              color: grey[200],
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: grey[400], // Default icon color
          transition: "color 0.3s",
        },
      },
    },
    MuiCollapse: {
      styleOverrides: {
        wrapperInner: {
          transition: "transform 0.3s ease",
        },
      },
    },
  },
});
interface Props {
  children: React.ReactNode;
}

const BlogThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={BlogTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default BlogThemeProvider;
