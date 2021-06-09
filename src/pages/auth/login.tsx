import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import Image from "next/image";

interface ErrorMap {
  Signin: string;
  OAuthSignin: string;
  OAuthCallback: string;
  OAuthCreateAccount: string;
  Callback: string;
  OAuthAccountNotLinked: string;
  default: string;
}

const errors: ErrorMap = {
  Signin: "Try signing in with a different account.",
  OAuthSignin: "Try signing in with a different account.",
  OAuthCallback: "Try signing in with a different account.",
  OAuthCreateAccount: "Try signing in with a different account.",
  Callback: "Try signing in with a different account.",
  OAuthAccountNotLinked: "To confirm your identity, sign in with the same account you used originally.",
  default: "Unable to sign in."
};

interface Error {
  error?: string;
}

const Login = (): JSX.Element => {

  const router = useRouter();
  const { error: errorType }: Error = router.query;
  const [ session, loading ] = useSession();
  const error = errorType && (errors[errorType] ?? errors.default);

  if(loading) return null;

  if(!loading && session) {
    router.push("/");
    return null;
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl pb-6 text-black dark:text-white">Log in to Chat</h1>

      {error && (
        <div className="text-white bg-purple-600 rounded mb-7 p-2 text-center w-80 origin-top animate-pulse-3">
          <p>{error}</p>
        </div>
      )}

      <div className="w-80 space-y-4">
        <button
          className="flex text-lg items-center space-x-3 w-full bg-[#333333] text-white p-3 rounded hover:bg-gray-600 shadow-md focus:outline-none transition ease-out duration-500"
          onClick={() => signIn("github")}
        >
          <Image src={`${process.env.BASE_PATH}/github.svg`} width={26} height={26} />
          <span>
            Log in with GitHub
          </span>
        </button>

        <button
          className="flex text-lg items-center space-x-3 w-full bg-blue-400 text-white p-3 rounded hover:bg-blue-500 shadow-md focus:outline-none transition ease-out duration-500"
          onClick={() => signIn("twitter")}
        >
          <Image src={`${process.env.BASE_PATH}/twitter.svg`} width={26} height={26} />
          <span>
            Log in with Twitter
          </span>
        </button>
      </div>
    </div>
  );
};

export default Login;
