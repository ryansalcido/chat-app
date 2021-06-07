import { getProviders, signIn } from "next-auth/client";
import Image from "next/image";

type LoginProps = {
  providers: Array<Provider>
}

interface Provider {
  name: string,
  id: string
}

const Login = ({ providers }: LoginProps): JSX.Element => {
  console.log("Providers: ", providers);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl pb-6">Log in to Chat</h1>

      <div className="w-72 space-y-4">
        <button
          className="flex text-lg items-center space-x-3 w-full bg-[#333333] text-white p-3 rounded m-1 hover:bg-gray-600 shadow-md focus:outline-none"
          onClick={() => signIn("github")}
        >
          <Image src="/github.svg" width={26} height={26} />
          <span>
            Log in with GitHub
          </span>
        </button>

        <button
          className="flex text-lg items-center space-x-3 w-full bg-blue-400 text-white p-3 rounded m-1 hover:bg-blue-500 shadow-md focus:outline-none"
          onClick={() => signIn("twitter")}
        >
          <Image src="/twitter.svg" width={26} height={26} />
          <span>
            Log in with Twitter
          </span>
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers }
  };
}

export default Login;
