import { ModeToggle } from "../mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import logo from "../../assets/logo.png";
import { NavLink } from "./navLink";
import { DownloadCVButton } from "./downloadCVButton";

export function NavBar() {
  return (
    <nav className="sticky bg-white dark:bg-slate-950 top-0 p-2 z-50 w-full flex items-center justify-center mt-4">
      <div className="rounded-2xl w-5/6 md:w-[95%] h-20 flex items-center justify-between border-b border-b-slate-300 dark:border-b-slate-700 bg-slate-100 dark:bg-slate-900 px-8 py-2">
        <Avatar
          className="h-16 w-16 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <AvatarImage src={logo} />
          <AvatarFallback>SEEM</AvatarFallback>
        </Avatar>

        <div className="hidden md:flex flex-1 justify-evenly">
          <NavLink text="About" href="#about" />
          <NavLink text="Experience" href="#experience" />
          <NavLink text="Education" href="#education" />
          <NavLink text="Skills" href="#skills" />
          <NavLink text="Projects" href="#projects" />
          <NavLink text="Contact" href="#contact" className="text-blue-400" />
        </div>

        <DownloadCVButton />

        <ModeToggle />
      </div>
    </nav>
  );
}
