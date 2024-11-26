import Landing from "./pages/Landing";
import NavBar from "./components/Navbar";
import { Box, Container } from "@mui/material";
import { X } from "@mui/icons-material";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />

      <Container maxWidth="xl">
        <Landing />
      </Container>
      <Footer />
    </>
  );
}

export default App;
