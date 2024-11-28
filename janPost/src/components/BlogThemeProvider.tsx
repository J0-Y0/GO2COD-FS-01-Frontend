import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const DarkBlogTheme = createTheme({
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
      paper: "#0D1F2D", // bg-200
      // paper: "#1d2e3d", // bg-200
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

import { lightBlue, grey, blueGrey } from "@mui/material/colors";
import { createContext, useState } from "react";

const LightBlogTheme = createTheme({
  palette: {
    mode: "light", // Enables light mode
    primary: {
      main: lightBlue[700],
      light: lightBlue[500],
      dark: lightBlue[900],
    },
    secondary: {
      main: grey[600], // Slightly darker for better contrast in light mode
    },
    background: {
      default: grey[100], // Light background
      paper: grey[50], // Even lighter background for paper
    },
    text: {
      primary: blueGrey[900], // Darker text for readability
      secondary: blueGrey[700], // Slightly lighter for secondary text
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    fontSize: 12, // Maintain the same compact look
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: lightBlue[100], // Lighter hover background
            color: blueGrey[900],
            "& .MuiListItemIcon-root": {
              color: blueGrey[700], // Adjust icon color for light mode
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: blueGrey[600], // Default icon color for light mode
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
interface ThemContextType {
  theme: string;
  setTheme: (str: string) => void;
}
export const BlogThemeContext = createContext<ThemContextType | null>(null);

const BlogThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState("dark");

  return (
    <BlogThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme == "light" ? LightBlogTheme : DarkBlogTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </BlogThemeContext.Provider>
  );
};

export default BlogThemeProvider;
