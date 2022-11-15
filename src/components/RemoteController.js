import styled from "styled-components";
import { useState } from "react";

const Body = styled.div`
  width: 200px;
  height: 400px;
  background-color: ${(props) => (props.clicked ? "black" : "orange")};
  color: ${(props) => (props.clicked ? "white" : "black")};
  position: absolute;
  left: ${(props) => props.X || "85vw"};
  top: ${(props) => props.Y || "5vh"};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Handle = styled.div`
  background-color: ${(props) => (props.clicked ? "black" : "orange")};
  color: ${(props) => (props.clicked ? "white" : "black")};
  width: 30%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: move;
`;

function RemoteController(props) {
  const [clicked, setClicked] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState();
  const [zIndex, setZIndex] = useState(0);
  const [X, setX] = useState();
  const [Y, setY] = useState();

  const onMouseDown = () => setClicked(true);
  const onMouseUp = () => setClicked(false);
  const onMouseLeave = () => setClicked(false);
  const onMouseMove = (e) => {
    if (clicked) {
      setX(e.clientX - 100 + "px");
      setY(e.clientY - 20 + "px");
    }
  };

  const onWidthChange = (e) => setWidth(e?.target.value);
  const onHeightChange = (e) => setHeight(e?.target.value);
  const onColorChange = (e) => setColor(e?.target.value);
  const onZIndexChange = (e) => setZIndex(e?.target.value);

  const onClick = () => {
    const temp = { type: "box", width: width, height: height, color: color, zIndex: zIndex };
    props.setElements([...props?.elements, temp]);
  };

  return (
    <Body X={X} Y={Y} clicked={clicked}>
      <Handle
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        clicked={clicked}
      >
        handle
      </Handle>

      <input type="text" placeholder="width" onChange={onWidthChange} />
      <input type="text" placeholder="height" onChange={onHeightChange} />
      <input type="text" placeholder="color" onChange={onColorChange} />
      <input type="text" placeholder="z-index" onChange={onZIndexChange} />
      <button onClick={onClick}>추가하기</button>
    </Body>
  );
}

export default RemoteController;
