import { useEffect, useRef } from "react";
import styled from "styled-components";

const Body = styled.canvas.attrs()`
  width: 100%;
  height: 100%;
`;

function Canvas(props) {
  const ref = useRef();
  const width = props.props.width;
  const height = props.props.height;
  const imageURL = props.props.imageURL;

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    const NewImage = new Image();
    NewImage.src = imageURL;
    NewImage.onload = () => {
      ctx.drawImage(NewImage, 0, 0, canvas.width, canvas.height);
    };
  }, [width, height, imageURL]);

  return <Body ref={ref} />;
}

export default Canvas;
