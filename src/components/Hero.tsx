import Link from "next/link";

const Hero = () => {
  const playlists = [
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
  ];

  return (
    <div className="bg-white">
      {" "}
      {/* Add this wrapper with background white */}
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
            href="/create"
            className="inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Generate Playlist
          </Link>
        </div>
      </header>
      <section className="container mx-auto px-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 py-12">
        {playlists.map((album, index) => (
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
    </div>
  );
};

export default Hero;
