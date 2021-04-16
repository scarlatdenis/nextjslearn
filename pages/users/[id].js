import { useRouter } from "next/router";
import MainContainer from "..//../components/MainContainer";
export default function User({ user }) {
  const { query } = useRouter();

  return (
    <MainContainer>
      <div>
        <h1>User nr: {query.id}</h1>
        <h2>User name: {user.name}</h2>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
