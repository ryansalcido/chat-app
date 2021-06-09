import { NextPage } from "next";
import Link from "next/link";
import { signOut, useSession } from "next-auth/client";


const Home: NextPage = () => {
  const [ session ] = useSession();
  return (
    <div className="text-black dark:text-white">
      <h1 className="text-5xl text-center">Chat Application</h1>
      {!session && <>
        Not signed in <br/>
        <Link href="/auth/login">Sign in</Link>
      </>}
      {session && <>
        <pre>Signed in as {JSON.stringify(session)}</pre>
        <button onClick={() => signOut()}>Sign out</button>
      </>}
    </div>
  );
};

export default Home;
