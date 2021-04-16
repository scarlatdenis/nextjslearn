import Head from "next/head";
import A from "./A";

export default function MainContainer({ children, keywords }) {
  return (
    <>
      <Head>
        <meta keywords={"This is SEO optimization" + keywords}></meta>
        <title>Home page</title>
      </Head>
      <div className={"navbar"}>
        <A href={"/"} text="home" />
        <A href={"/users"} text="users" />
      </div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
      <div>{children}</div>
    </>
  );
}
