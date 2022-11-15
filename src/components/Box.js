import { useState } from "react";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${(props) => props.props.color};
  border-radius: ${(props) => props.props.borderRadius};
  width: ${(props) => props.props.width + "px"};
  height: ${(props) => props.props.height + "px"};
  z-index: ${(props) => props.props.zIndex};
  position: absolute;
  left: ${(props) => props.X};
  top: ${(props) => props.Y};
  cursor: move;
  background-image: ${(props) => `url(${props.props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  border: ${(props) => (props.clicked ? "red 2px solid" : "")};
`;

function Box(props) {
  const [clicked, setClicked] = useState(false);
  const [X, setX] = useState(props.X);
  const [Y, setY] = useState(props.Y);

  const onMouseDown = () => setClicked(true);
  const onMouseUp = () => setClicked(false);
  const onMouseLeave = () => setClicked(false);
  const onMouseMove = (e) => {
    if (clicked) {
      const width = props?.width;
      const height = props?.height;
      setX(e.clientX - width / 2 + "px");
      setY(e.clientY - height / 2 + "px");
    }
  };

  return (
    <Body
      props={props}
      X={X}
      Y={Y}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      clicked={clicked}
    />
  );
}

export default Box;
