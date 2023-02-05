import NavBar from "./components/NavBar";
import { Container } from "@chakra-ui/react";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <Container maxW="100%" padding="0">
      <NavBar />
      <ItemListContainer greeting="Hola a todos" />
    </Container>
  );
}

export default App;
