import { Switch } from "@headlessui/react";
import { useTheme } from "../hooks/useTheme";

const ThemeSwitch = (): JSX.Element => {
  const [ theme, toggleTheme ] = useTheme();

  const isDarkMode = theme === "dark";

  return (
    <Switch
      checked={isDarkMode}
      onChange={toggleTheme}
      className={`${
        isDarkMode ? "bg-green-600" : "bg-gray-600"
      } relative inline-flex items-center h-10 rounded-full w-20`}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`${
          isDarkMode ? "translate-x-11" : "translate-x-1"
        } inline-block w-8 h-8 transform bg-white rounded-full transition ease-in-out duration-300`}
      />
    </Switch>
  );
};

export default ThemeSwitch;
