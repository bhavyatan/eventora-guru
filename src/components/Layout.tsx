
import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 px-6 pb-16 pt-6 md:px-8 md:pt-8 lg:px-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
