"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-white">
      <div
        className={`fixed inset-0 bg-black opacity-50 z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      ></div>
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
      </header>
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
      <header className="flex flex-col items-center justify-center gap-5 py-20">
        <h1 className="text-6xl font-extrabold mx-auto text-black text-center">
          Generate your next Playlist
          <br />
          with AI in seconds
        </h1>
        <p className="text-lg text-gray-700 text-center">
          PlaylistNow simplifies the process for you to create playlists in{" "}
          <br />
          seconds, completely for free.
        </p>
        <div className="flex items-center gap-2">
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Generate Playlist
          </Link>
        </div>
      </header>
      <section className="container mx-auto px-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 py-12">
        {[
          {
            src: "/Paradise.jpg",
            alt: "Album Cover",
            title: "Upbeat Pop Playlist",
            artists: "Ariana Grande, Dua Lipa",
          },
          {
            src: "/Flower.jpg",
            alt: "Album Cover",
            title: "Chill Indie Playlist",
            artists: "Bon Iver, Phoebe Bridgers",
          },
          {
            src: "/Pink.jpg",
            alt: "Album Cover",
            title: "Workout Beats Playlist",
            artists: "Kendrick Lamar, Megan Thee Stallion",
          },
          {
            src: "/Retro.jpg",
            alt: "Album Cover",
            title: "Retro Hits Playlist",
            artists: "Queen, The Beatles",
          },
          {
            src: "/Juice.png",
            alt: "Album Cover",
            title: "Rap Essentials Playlist",
            artists: "Kanye West, Nas",
          },
          {
            src: "/Kanye.webp",
            alt: "Album Cover",
            title: "Country Classics Playlist",
            artists: "Johnny Cash, Dolly Parton",
          },
        ].map((album, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img
              src={album.src}
              alt={album.alt}
              width={250}
              height={250}
              className="rounded-lg"
            />
            <div className="text-center">
              <h3 className="text-black font-semibold">{album.title}</h3>
              <p className="text-gray-500">{album.artists}</p>
            </div>
          </div>
        ))}
      </section>
      <footer className="bg-white py-8 px-4">
        <div className="container mx-auto flex flex-col items-center">
          <div className="w-full border-t border-gray-300 py-4 flex justify-between items-center max-w-7xl">
            <p className="text-gray-500">Created by William.</p>
            <a
              href="https://github.com/williamw205/Music-Generator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <img
                src="/Github.png"
                alt="GitHub Logo"
                className="w-5 h-5 mr-2"
              />
              View on GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
