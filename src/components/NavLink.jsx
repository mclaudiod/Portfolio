export const NavLink = ({ href, title }) => {
  return (
    <a
      href={href}
      className="block py-2 pl-3 pr-4 text-slate-200 sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </a>
  );
};
