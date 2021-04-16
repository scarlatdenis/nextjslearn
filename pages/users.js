import Link from "next/link";
import MainContainer from "../components/MainContainer";

export default function Users({ users }) {
  return (
    <MainContainer keywords={"users page"}>
      
      <h1>Users: </h1>

      <ul className="users">
        {users.map((user) => (
          <li key={user.id} className={"user"}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
        <style jsx>
          {`
            .users {
              margin: 20px 0 0 20px;
              list-style-type: none;
            }
          `}
        </style>
      </ul>
    </MainContainer>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}
