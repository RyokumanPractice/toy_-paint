import RemoteController from "./components/RemoteController";
import PostBoard from "./components/PostBoard";
import Container from "./components/Container";
import { useState, useRef } from "react";

function App() {
  const [elements, setElements] = useState([]);
  const [focus, setFocus] = useState();
  const ref = useRef();

  return (
    <Container>
      <PostBoard elements={elements} ref={ref} focus={focus} setFocus={setFocus} />
      <RemoteController elements={elements} setElements={setElements} ref={ref} focus={focus} />
    </Container>
  );
}

export default App;
