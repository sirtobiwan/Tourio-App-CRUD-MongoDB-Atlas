import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f1f1f1;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Container = styled.div`
  text-align: center;
  margin: 10px 0;
`;

const Title = styled.h1`
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
  font-weight: bold;
`;

export default function Login() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <Container>
        <Title>Signed in as {session.user.name}</Title>
        <Button onClick={() => signOut()}>Sign out</Button>
      </Container>
    );
  }
  return (
    <Container>
      <Title>Not signed in</Title>
      <Button onClick={() => signIn()}>Sign in</Button>
    </Container>
  );
}

