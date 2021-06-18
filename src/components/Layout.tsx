import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;
