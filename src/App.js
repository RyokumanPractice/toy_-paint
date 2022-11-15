import RemoteController from "./components/RemoteController";
import PostBoard from "./components/PostBoard";
import Container from "./components/Container";
import { useState } from "react";

function App() {
  const [elements, setElements] = useState([]);

  return (
    <Container>
      <PostBoard elements={elements} />
      <RemoteController elements={elements} setElements={setElements} />
    </Container>
  );
}

export default App;
