import Link from "next/link.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "../components/Form.js";
import { StyledLink } from "../components/StyledLink.js";
import useSWRMutation from "swr/mutation";
import {useSession} from "next-auth/react"

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
`;
async function sendRequest(url, { arg }) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  if (!response.ok) {
    console.log(`Error: ${response.status}`);
  }
}

export default function CreatePlacePage() {
  const { trigger } = useSWRMutation("/api/places", sendRequest);
  const router = useRouter();
  const{data: session, status} = useSession();

  function addPlace(place) {
    trigger(place);
    router.push("/");
  }
  if (status !== 'authenticated'){
    return <h1>Access denied</h1>
  }
  return (
    <>
      <h2 id="add-place">Add Place</h2>
      <Link href="/" passHref legacyBehavior>
        <StyledBackLink>back</StyledBackLink>
      </Link>
      <Form onSubmit={addPlace} formName={"add-place"} />
    </>
  );
}
