import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import BlogThemeProvider from "./components/BlogThemeProvider.tsx";
import AuthProvider from "./hooks/auth/useAuth.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>

  <BlogThemeProvider>
    <App />
  </BlogThemeProvider>
  // </StrictMode>
);
