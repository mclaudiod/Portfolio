import { useState } from "react";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="fixed border-b border-zinc-700 top-0 left-0 right-0 z-10 bg-zinc-950 bg-opacity-90">
      <div className="h-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="inline-flex justify-between grow w-full md:w-auto">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.svg" className="h-8" alt="Movies Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Movies
            </span>
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-600"
            onClick={toggleNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="flex grow justify-between flex-col md:flex-row">
          <div className="flex grow md:grow-0 md:order-2">
            <div
              className={`relative grow mt-4 md:grow-0 md:mt-0 md:block ${
                isNavOpen ? "" : "hidden"
              }`}
            >
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm border border-gray-600 rounded-lg bg-gray-700 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-white"
                placeholder="Search..."
              />
            </div>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isNavOpen ? "" : "hidden"
            }`}
          >
            <div className="flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg md:gap-8 md:flex-row md:mt-0 md:border-0">
              <div className="flex text-white rounded md:hover:text-blue-500 text-white">
                <a
                  href="/now_playing"
                  className={`grow py-2 px-3 md:py-0 md:px-0 rounded
                          ${
                            location.pathname === "/now_playing"
                              ? "bg-blue-500 md:bg-transparent md:text-blue-500"
                              : ""
                          }
                        `}
                >
                  Now Playing
                </a>
              </div>
              <div className="flex text-white rounded md:hover:text-blue-500 text-white">
                <a
                  href="/popular"
                  className={`grow py-2 px-3 md:py-0 md:px-0 rounded
                          ${
                            location.pathname === "/popular"
                              ? "bg-blue-500 md:bg-transparent md:text-blue-500"
                              : ""
                          }
                        `}
                >
                  Popular
                </a>
              </div>
              <div className="flex text-white rounded md:hover:text-blue-500 text-white">
                <a
                  href="/top_rated"
                  className={`grow py-2 px-3 md:py-0 md:px-0 rounded
                          ${
                            location.pathname === "/top_rated"
                              ? "bg-blue-500 md:bg-transparent md:text-blue-500"
                              : ""
                          }
                        `}
                >
                  Top Rated
                </a>
              </div>
              <div className="flex text-white rounded md:hover:text-blue-500 text-white">
                <a
                  href="/upcoming"
                  className={`grow py-2 px-3 md:py-0 md:px-0 rounded
                          ${
                            location.pathname === "/upcoming"
                              ? "bg-blue-500 md:bg-transparent md:text-blue-500"
                              : ""
                          }
                        `}
                >
                  Upcoming
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
