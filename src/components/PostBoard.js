import styled from "styled-components";
import Box from "./Box";
import { forwardRef } from "react";

const PostBody = styled.div`
  width: 96vw;
  height: 96vh;
  background-color: white;
  border: black solid 1px;
  position: relative;
  overflow: hidden;
`;

function PostBoard(props, ref) {
  return (
    <PostBody>
      {props.elements.map((Element, i) => {
        const uuid = Element?.uuid;
        const type = Element?.type;
        const width = Element?.width;
        const height = Element?.height;
        const color = Element?.color;
        const zIndex = Element?.zIndex + 10;
        const imageURL = Element?.imageURL;

        if (type === "box") {
          return (
            <Box
              type={type}
              key={i}
              width={width}
              height={height}
              color={color}
              zIndex={zIndex}
              imageURL={imageURL}
              ref={ref}
              uuid={uuid}
              setFocus={props.setFocus}
              focus={props.focus}
            />
          );
        } else if (type === "Container") {
          return <div key={i}></div>;
        } else {
          return <div key={i}></div>;
        }
      })}
    </PostBody>
  );
}

export default forwardRef(PostBoard);
