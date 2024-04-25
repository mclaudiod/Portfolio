export const Footer = () => {
  return (
    <footer className="relative bottom-0 left-0 right-0 footer border-t border-zinc-700 z-50 h-32 bg-zinc-950 bg-opacity-80">
      <div className="container flex items-center justify-between">
        <img className="w-[80px] md:w-[100px] m-6" src="" alt="Logo" />
        <p className="text-zinc-600">
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
