import { useTheme } from "../hooks/useTheme";

const Loading = (): JSX.Element => {
  // Used to set theme when application is in a loading state.
  // Returned values are not needed
  useTheme();
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div
        className="w-52 h-52 relative box-border rounded-full border-t-10 border-solid border-green-600 animate-spin-2
                    before:border-t-10 before:left-0 before:-top-2 before:border-solid before:border-red-600
                    before:rotate-120 before:w-52 before:h-52 before:rounded-full before:absolute
                    after:border-t-10 after:left-0 after:-top-2 after:border-solid after:border-blue-600
                    after:rotate-240 after:w-52 after:h-52 after:rounded-full after:absolute"
      />
    </div>
  );
};

export default Loading;
