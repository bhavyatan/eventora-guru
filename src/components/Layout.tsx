
import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64">
        <header className="border-b px-6 py-3 flex items-center justify-end">
          <ThemeToggle />
        </header>
        <main className="flex-1 px-6 pb-16 pt-6 md:px-8 md:pt-8 lg:px-10">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
