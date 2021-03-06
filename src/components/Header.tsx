import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import { LockClosedIcon, ChatIcon } from "@heroicons/react/solid";
import ThemeSwitch from "./ThemeSwitch";
import AuthenticatedMenuDropdown from "./AuthenticatedMenuDropdown";

const Header = (): JSX.Element => {
  const router = useRouter();
  const [ session, loading ] = useSession();

  return (
    <nav className="flex items-center justify-between bg-gray-400 px-6 py-2">
      <div className="flex items-center space-x-2">
        <ChatIcon className="w-8 h-8" />
        <Link href="/">
          <a className="text-2xl">Chat</a>
        </Link>
      </div>

      <div className="flex items-center space-x-3">
        <ThemeSwitch />
        {!session && !loading && (
          <button
            className="flex items-center bg-green-600 p-2 rounded space-x-2 hover:bg-green-500 focus:outline-none transition ease duration-500"
            onClick={() => router.push("/auth/login")}
          >
            <LockClosedIcon className="w-6 h-6" />
            <span>Log in</span>
          </button>
        )}
        {session && !loading && <AuthenticatedMenuDropdown session={session} />}
      </div>
    </nav>
  );
};

export default Header;
