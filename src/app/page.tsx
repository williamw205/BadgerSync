import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <header className="flex justify-between items-center py-4 px-14">
        <div className="flex items-center gap-2">
          <img
            src="/Logo.svg"
            alt="Like Music Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-lg font-semibold text-black">PlaylistNow </span>
        </div>
        <div className="flex items-center gap-4">
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
      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 py-12">
        <div className="flex flex-col items-center gap-2">
          <img
            src="/Paradise-Album.svg"
            alt="Album Cover"
            width={250}
            height={250}
            className="rounded-lg"
          />
          <div className="text-center">
            <h3 className="text-black font-semibold">Upbeat Pop Playlist</h3>
            <p className="text-gray-500">Ariana Grande, Dua Lipa</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src="/Paradise-Album.svg"
            alt="Album Cover"
            width={250}
            height={250}
            className="rounded-lg"
          />
          <div className="text-center">
            <h3 className="text-black font-semibold">Chill Indie Playlist</h3>
            <p className="text-gray-500">Bon Iver, Phoebe Bridgers</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src="/Paradise-Album.svg"
            alt="Album Cover"
            width={250}
            height={250}
            className="rounded-lg"
          />
          <div className="text-center">
            <h3 className="text-black font-semibold">Workout Beats Playlist</h3>
            <p className="text-gray-500">Kendrick Lamar, Megan Thee Stallion</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src="/Paradise-Album.svg"
            alt="Album Cover"
            width={250}
            height={250}
            className="rounded-lg"
          />
          <div className="text-center">
            <h3 className="text-black font-semibold">Retro Hits Playlist</h3>
            <p className="text-gray-500">Queen, The Beatles</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src="/Paradise-Album.svg"
            alt="Album Cover"
            width={250}
            height={250}
            className="rounded-lg"
          />
          <div className="text-center">
            <h3 className="text-black font-semibold">
              Rap Essentials Playlist
            </h3>
            <p className="text-gray-500">Kanye West, Nas</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src="/Paradise-Album.svg"
            alt="Album Cover"
            width={250}
            height={250}
            className="rounded-lg"
          />
          <div className="text-center">
            <h3 className="text-black font-semibold">
              Country Classics Playlist
            </h3>
            <p className="text-gray-500">Johnny Cash, Dolly Parton</p>
          </div>
        </div>
      </section>
      <footer className="bg-white py-8 border-t">
        <div className="container flex justify-between items-center">
          <p className="text-gray-500">Created by William.</p>
          <nav className="flex gap-4">
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-700"
              prefetch={false}
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-700"
              prefetch={false}
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-700"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
