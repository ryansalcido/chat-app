import Link from "next/link";
import { useTheme } from "../hooks/useTheme";

const Header = (): JSX.Element => {
  const [ , toggleTheme ] = useTheme();

  return (
    <nav className="bg-gray-600 px-6 py-2 dark:bg-gray-400">
      <button
        className="bg-green-400 p-1 rounded dark:bg-red-400"
        onClick={toggleTheme}
      >
        Toggle theme
      </button>

      <Link href="/">
        <a>Home</a>
      </Link>
    </nav>
  );
};

export default Header;
