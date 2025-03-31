
import { ReactNode, useEffect } from "react";
import Sidebar from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme();

  // Apply accent color from localStorage on component mount
  useEffect(() => {
    const storedAccent = localStorage.getItem("accentColor");
    if (storedAccent) {
      document.documentElement.style.setProperty("--accent-color", storedAccent);
    }
  }, []);

  return (
    <div className={`flex min-h-screen bg-background ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64">
        <header className={`border-b px-6 py-3 flex items-center justify-end ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
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
