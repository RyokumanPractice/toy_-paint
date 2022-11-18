import styled from "styled-components";
import { useState, forwardRef, useEffect } from "react";
import { v4 } from "uuid";
import Typography from "./Typography";
import Container from "./Container";

const Body = styled.div`
  width: 300px;
  height: 500px;
  background-color: ${(props) => (props.clicked ? "black" : "orange")};
  color: ${(props) => (props.clicked ? "white" : "black")};
  position: absolute;
  left: ${(props) => props.X || "85vw"};
  top: ${(props) => props.Y || "5vh"};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  z-index: 100;
`;

const Handle = styled.div`
  background-color: ${(props) => (props.clicked ? "black" : "orange")};
  color: ${(props) => (props.clicked ? "white" : "black")};
  width: 30%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: move;
  z-index: 100;
`;

const Input = styled.input.attrs((props) => ({ type: props.type }))`
  margin: ${(props) => (props.type === "file" ? "10px auto 10px 70px" : "10px auto")};
  width: 160px;
`;

function RemoteController(props, ref) {
  const [clicked, setClicked] = useState(false);
  const [classes, setClasses] = useState([]);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState();
  const [imageURL, setImageURL] = useState();
  const [zIndex, setZIndex] = useState(0);
  const [border, setBorder] = useState();
  const [borderRaduis, setborderRadius] = useState();
  const [X, setX] = useState();
  const [Y, setY] = useState();
  const [reader] = useState(new FileReader());

  const onMouseDown = () => setClicked(true);
  const onMouseUp = () => setClicked(false);
  const onMouseLeave = () => setClicked(false);
  const onMouseMove = (e) => {
    if (clicked) {
      setX(e.clientX - 150 + "px");
      setY(e.clientY - 25 + "px");
    }
  };

  const onWidthChange = (e) => setWidth(e?.target.value);
  const onHeightChange = (e) => setHeight(e?.target.value);
  const onColorChange = (e) => setColor(e?.target.value);
  const onZIndexChange = (e) => setZIndex(e?.target.value);
  const onBorderChange = (e) => setBorder(e?.target.value);
  const onBorderRadiusChange = (e) => setborderRadius(e?.target.value);
  const onImageChange = (e) => {
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setImageURL(reader.result);
      };
    } else {
      setImageURL(null);
    }
  };

  const onClick = () => {
    const temp = {
      uuid: v4(),
      type: "box",
      width: width,
      height: height,
      color: color,
      zIndex: zIndex,
      imageURL: imageURL,
    };
    props.setElements([...props?.elements, temp]);
  };

  useEffect(() => {
    setClasses(ref.current?.className.split(" "));
  }, [props.focus, ref]);

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
      <Container direction="row" width="100%" marginTop="10px">
        <Typography size="12px" margin={classes ? "0 10px 0 0" : "0 210px 0 0"}>
          UUID
        </Typography>
        <Typography size="12px" margin={classes ? "" : "6px"}>
          {classes ? classes[3] : ""}
        </Typography>
      </Container>
      <Container direction="row" width="100%" marginTop="10px">
        <Typography size="12px" margin={classes ? "0 10px 0 0" : "0 210px 0 0"}>
          TYPE
        </Typography>
        <Typography size="12px" margin={classes ? "" : "6px"}>
          {classes ? classes[2] : ""}
        </Typography>
      </Container>
      <Input type="text" placeholder="width" onChange={onWidthChange} />
      <Input type="text" placeholder="height" onChange={onHeightChange} />
      <Input type="text" placeholder="color" onChange={onColorChange} />
      <Input type="text" placeholder="z-index" onChange={onZIndexChange} />
      <Input type="text" placeholder="border" onChange={onBorderChange} />
      <Input type="text" placeholder="border-radius" onChange={onBorderRadiusChange} />
      <Input type="file" onChange={onImageChange} />
      <button onClick={onClick}>추가하기</button>
    </Body>
  );
}

export default forwardRef(RemoteController);
