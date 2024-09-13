export const Footer = () => {
  return (
    <footer className="relative bottom-0 left-0 right-0 footer border-t border-zinc-700 z-50 bg-zinc-950 bg-opacity-80">
      <div className="container mx-auto flex items-center justify-between">
        <img className="w-[200px] my-12 mx-3" src="/Clau Logo final A1.png" alt="Logo" />
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
