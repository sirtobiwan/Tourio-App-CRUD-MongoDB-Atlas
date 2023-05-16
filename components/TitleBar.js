import styled from "styled-components";

const Headline = styled.h1`
  color: #333;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f5f5f5;
  margin: 0;
  padding: 20px;
  text-align: center;
  z-index: 1;
  border: 2px solid #333;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.08);
`;

export default function TitleBar() {
  return <Headline>Tourio App</Headline>;
}
