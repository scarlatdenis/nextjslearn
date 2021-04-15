import { useRouter } from "next/router";

export default function User({ user }) {
  const { query } = useRouter();

  return <div>User nr {query.id}</div>;
}

// export async function getServerSideProps(context) {
//   console.log(context);
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
