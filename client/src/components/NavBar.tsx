import { ModeToggle } from "./ModeToggle";
import { SidebarTrigger } from "./ui/sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      {/* LEFT */}
      <SidebarTrigger />
      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <span>Dashboard</span>
        {/* THEME MENU */}
        <ModeToggle />
        <Avatar className="size-9">
          <AvatarImage src="logo.png" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default NavBar;
