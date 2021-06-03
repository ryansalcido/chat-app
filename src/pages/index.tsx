import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/client";


const Home: NextPage = () => {
  const [ session ] = useSession();

  return (
    <div className="text-center">
      <h1 className="text-5xl">Chat Application</h1>

      {!session && <>
        Not signed in <br/>
        <button onClick={() => signIn()}>Sign in</button>
      </>}
      {session && <>
        <pre>Signed in as {JSON.stringify(session)}</pre>
        <button onClick={() => signOut()}>Sign out</button>
      </>}
    </div>
  );
};

export default Home;
