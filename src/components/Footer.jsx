export const Footer = () => {
  return (
    <footer className="relative bottom-0 left-0 right-0 footer border-t border-zinc-700 bg-zinc-950 z-10">
      <div className="container flex items-center justify-between">
        <img className="w-[80px] md:w-[100px] m-6" src="" alt="Logo" />
        <p className="text-slate-600">
          © 2024{" "}
          <a href="https://github.com/mclaudiod" className="hover:underline">
            Claudio D. Morales
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
