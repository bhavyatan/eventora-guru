
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  BarChart,
  Video,
  Zap,
  PlusCircle,
  Home,
  Settings,
  Menu
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { toast } from "sonner";
import { useTheme } from "./ThemeProvider";

const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home
  },
  {
    title: "Event Setup",
    href: "/setup",
    icon: Calendar
  },
  {
    title: "Live Management",
    href: "/live",
    icon: Video
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings
  }
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  const handleCreateNewEvent = () => {
    toast.success("New event creation initiated");
    navigate("/setup");
  };
  
  // Desktop sidebar
  const DesktopSidebar = () => (
    <div className="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r bg-sidebar text-sidebar-foreground md:flex">
      <div className="flex h-14 items-center border-b px-4 py-2">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <Zap size={24} className="text-sidebar-primary" />
          <span className="text-xl">Eventora Guru</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:text-sidebar-primary",
                location.pathname === item.href ? "bg-sidebar-accent text-sidebar-primary" : ""
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <Button 
          className="w-full gap-2 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
          onClick={handleCreateNewEvent}
        >
          <PlusCircle className="h-4 w-4" />
          <span>New Event</span>
        </Button>
      </div>
    </div>
  );

  // Mobile sidebar
  const MobileSidebar = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className={`md:hidden fixed top-4 left-4 z-40 ${theme === 'dark' ? 'border-gray-600 bg-gray-800 text-white' : 'border-gray-200'}`}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-64">
        <div className="flex h-14 items-center border-b px-4 py-2">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Zap size={24} className="text-primary" />
            <span className="text-xl">Eventora Guru</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                  location.pathname === item.href ? "bg-accent text-accent-foreground font-medium" : ""
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Button 
            className="w-full gap-2"
            onClick={handleCreateNewEvent}
          >
            <PlusCircle className="h-4 w-4" />
            <span>New Event</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};

export default Sidebar;
