import Landing from "./pages/Landing";
import NavBar from "./components/Navbar";
import { Box, Container } from "@mui/material";
import { X } from "@mui/icons-material";
import Footer from "./components/Footer";
import Feed from "./pages/Feed";

function App() {
  return (
    <>
      <NavBar />

      {/* <Container maxWidth="xl">
        <Landing />
      </Container>
      <Footer /> */}
      <Feed />
    </>
  );
}

export default App;
