import styled from "styled-components";

const Typography = styled.p`
  font-size: ${(props) => props.size || "5px"};
  margin: ${(props) => props.margin || "0px"};
`;

export default Typography;
