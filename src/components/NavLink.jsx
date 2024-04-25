export const NavLink = ({ href, title }) => {
  return (
    <a
      href={href}
      className="block py-2 pl-3 pr-4 text-zinc-400 sm:text-xl rounded md:p-0 hover:text-zinc-50"
    >
      {title}
    </a>
  );
};
