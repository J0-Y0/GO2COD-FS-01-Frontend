import Landing from "./pages/Landing";
import NavBar from "./components/Navbar";
import { Box, Container } from "@mui/material";
import { X } from "@mui/icons-material";

function App() {
  return (
    <>
      <NavBar />

      <Container maxWidth="xl">
        <Landing />
      </Container>
    </>
  );
}

export default App;
