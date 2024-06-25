import Link from "next/link";

const Footer = () => {
  return (
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
            <img src="/Github.png" alt="GitHub Logo" className="w-5 h-5 mr-2" />
            View on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
