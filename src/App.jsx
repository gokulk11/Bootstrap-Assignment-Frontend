import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Home from "./page/Home";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Home />
      </Container>
    </>
  );
}

export default App;
