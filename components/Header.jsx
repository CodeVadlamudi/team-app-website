import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Header() {
  const Links = [
    { name: "Blog", link: "/blog" },
    { name: "Support", link: "/" },
    { name: "Log In", link: "/login" },
  ];

  const [toggle, setToggle] = useState(false);
  return (
    <header className="p-5 shadow sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="w-32 h-12 block">
            <img
              src="./images/team-logo.png"
              alt="Team Logo"
              className="w-full h-full object-contain"
            />
          </a>

          {/* Navbar */}
          <div
            className={`absolute top-[89px] left-0 p-10 w-full bg-white space-y-4 lg:relative lg:top-0 lg:bg-transparent lg:w-auto lg:space-y-0 lg:flex lg:items-center lg:space-x-10 lg:p-0 duration-300 z-10 ${
              toggle ? "left-0" : "left-[-100%] lg:left-0"
            }`}>
            <nav className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-10">
              <a href="/" className="text-lg underline text-indigo-800">
                Product
              </a>
              {Links.map((link) => (
                <a
                  href={link.link}
                  className="text-black/80 text-lg underline hover:text-indigo-800 duration-150">
                  {link.name}
                </a>
              ))}
            </nav>

            <button
              type="button"
              className="w-48 h-12 bg-indigo-500/80 rounded text-white text-lg hover:bg-indigo-500 duration-150">
              Get Access
            </button>
          </div>

          {/* Toggle */}
          <button
            onClick={() => setToggle(!toggle)}
            className="text-white w-12 h-12 border bg-indigo-500 flex items-center justify-center rounded lg:hidden">
            {toggle ? (
              <XMarkIcon className="w-10 h-10" />
            ) : (
              <Bars3Icon className="w-10 h-10" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
