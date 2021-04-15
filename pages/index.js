import Link from "next/link";

export default function Index() {
  return (
    <div>
      <div className={"navbar"}>
        <Link className={"link"} href="/">
          <a className={"link"}>Home</a>
        </Link>
        <Link className={"link"} href="/users">
          <a className={"link"}>Users</a>
        </Link>
      </div>

      <h3>This is first page</h3>

      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
          .link {
            text-decoration: none;
            color: white;
            font-size: 20px;
            margin: 10px;
          }
        `}
      </style>
    </div>
  );
}
