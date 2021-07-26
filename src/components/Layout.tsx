import { Fragment } from "react";
import { useSession } from "next-auth/client";
import Header from "./Header";
import Loading from "./Loading";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [ , loading ] = useSession();
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {loading && <Loading />}
      {!loading && (
        <Fragment>
          <Header />
          <div className="p-6">
            {children}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Layout;
