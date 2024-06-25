"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Overlay when menu is open */}
      <div
        className={`fixed inset-0 bg-black opacity-50 z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Header */}
      <header className="flex justify-between items-center py-4 px-4 md:px-14 relative z-50 bg-white">
        <div className="flex items-center gap-2">
          <img
            src="/Logo.svg"
            alt="Like Music Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-lg font-semibold text-black">PlaylistNow</span>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-black hover:text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/"
            className="text-black hover:text-gray-700"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-black px-6 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Generate Playlist
          </Link>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-2 absolute top-16 inset-x-0 bg-white shadow-md rounded-md z-50">
          <Link
            href="#"
            className="text-black hover:text-gray-700"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-black px-6 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Generate Playlist
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
