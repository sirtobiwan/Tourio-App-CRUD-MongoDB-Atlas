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
  margin: 10px 0;
`;

export default function Login() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <Container>
        Signed in as {session.user.name} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </Container>
    );
  }
  return (
    <Container>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </Container>
  );
}

