import { NextPage } from "next";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";


const Home: NextPage = () => {
  const [ session ] = useSession();
  return (
    <div>
      <h1 className="text-5xl text-center">Chat Application</h1>
      {!session && <>
        Not signed in <br/>
        <Link href="/auth/login">Sign in</Link>
        {/* <button onClick={() => signIn()}>Sign in</button> */}
      </>}
      {session && <>
        <pre>Signed in as {JSON.stringify(session)}</pre>
        <button onClick={() => signOut()}>Sign out</button>
      </>}
    </div>
  );
};

export default Home;
