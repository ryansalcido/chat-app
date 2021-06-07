type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="h-screen p-8 dark:bg-gray-900 dark:text-white">
      {children}
    </div>
  );
};

export default Layout;
