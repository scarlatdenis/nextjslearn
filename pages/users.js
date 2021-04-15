import { useState, useEffect } from "react";
import Link from "next/link";

export default function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "Petea" },
    { id: 2, name: "Jorik" },
  ]);

  useEffect(async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    setUsers(data);
  }, []);

  return (
    <>
      <h1>Users: </h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

