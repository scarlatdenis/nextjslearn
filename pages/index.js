import Link from "next/link";
import A from "../components/A";

export default function Index() {
  return (
    <div>
      <div className={"navbar"}>
        <A href={"/"} text="home" />
        <A href={"/users"} text="users" />
      </div>

      <h3>This is first page</h3>

      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        
        `}
      </style>
    </div>
  );
}
