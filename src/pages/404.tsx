import { useRouter } from "next/router";
import BugFixingImage from "../components/BugFixingImage";
import { HomeIcon } from "@heroicons/react/solid";

const Custom404 = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <BugFixingImage className="xs:w-4/5 xs:h-4/5 md:w-3/5 md:h-3/5 lg:w-2/5 lg:h-2/5" />
      <h1 className="text-center dark:text-white xs:text-3xl sm:text-5xl">
        Oh, no! Page not found.
      </h1>
      <button
        className="flex items-center mt-5 bg-green-600 p-2 rounded space-x-2 hover:bg-green-500 focus:outline-none transition ease duration-500"
        onClick={() => router.push("/")}
      >
        <HomeIcon className="w-6 h-6" />
        <span>Go to Home</span>
      </button>
    </div>
  );
};

export default Custom404;
