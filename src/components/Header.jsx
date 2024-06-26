import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { NavLink } from "./NavLink";
import { NavPhone } from "./NavPhone";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="fixed mx-auto border-b border-zinc-700 top-0 inset-x-0 z-50 h-24 bg-zinc-950 bg-opacity-80">
      <nav className="flex container flex-wrap items-center justify-between mx-auto px-2">
        <a href="#">
          <img className="w-[80px] md:w-[100px] m-3" src="" alt="Logo" />
        </a>
        <div className="mobile-menu block md:hidden">
          {!isNavOpen ? (
            <button
              onClick={() => setIsNavOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-zinc-400 text-zinc-400 hover:text-zinc-50 hover:border-zinc-50"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setIsNavOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-zinc-400 text-zinc-400 hover:text-zinc-50 hover:border-zinc-50"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {isNavOpen ? <NavPhone links={navLinks} /> : null}
    </header>
  );
};
