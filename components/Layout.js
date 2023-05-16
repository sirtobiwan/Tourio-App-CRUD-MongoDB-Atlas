import TitleBar from "./TitleBar.js";
import styled from "styled-components";
import Head from "next/head.js";
import Login from "./Login.js";

const Main = styled.main`
  display: grid;
  gap: 0.5rem;
  margin-top: 5rem;
  padding: 0.5rem;
  position: relative;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin: 0;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tourio</title>
      </Head>
      <TitleBar />
      <Main>
        <Login />
        <Title>Tourio App</Title>
        {children}
      </Main>
    </>
  );
}

