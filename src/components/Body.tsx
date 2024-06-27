"use client";

import React, { useState } from "react";
import Link from "next/link";
import Label from "@/components/ui/label";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

// Defining an inteface
interface PlaylistItem {
  title: string;
  artist: string;
  albumCover: string | null;
}

const Body = () => {
  const [mood, setMood] = useState("");
  const [genre, setGenre] = useState("");
  const [activity, setActivity] = useState("");
  const [playlist, setPlaylist] = useState<PlaylistItem[]>([]);
  const [loading, setLoading] = useState(false); // Tracking loading state
  const [seeMoreClicked, setSeeMoreClicked] = useState(false); // Track if "See more" is clicked

  const handleGeneratePlaylist = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Setting the loading state to true

    try {
      // Sending user inputs to the backend API
      const response = await fetch("/api/generatePlaylist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mood, genre, activity }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate playlist");
      }

      const data = await response.json();

      // Parse the response
      const parsedPlaylist: PlaylistItem[] = data.playlist;
      setPlaylist(parsedPlaylist); // Set the playlist with fetched data
    } catch (error) {
      console.error("Error generating playlist:", error);
    } finally {
      setLoading(false); // Setting loading state to false
    }
  };

  const renderPlaceholder = (index: number) => {
    const icons = ["🎵", "🎸", "🎷", "🎹"];
    const colors = ["#f44336", "#ffc107", "#3f51b5", "#4caf50"];

    return (
      <div
        className="flex items-center justify-center w-full h-full rounded"
        style={{
          backgroundColor: colors[index % colors.length],
          color: "#fff",
          fontSize: "1.5rem",
        }}
      >
        {icons[index % icons.length]}
      </div>
    );
  };

  const handleSeeMoreClick = () => {
    setSeeMoreClicked((prev) => !prev); // Toggling the state when "See more" is clicked
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="p-8 max-w-6xl mx-auto mt-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg md:text-3xl mb-8 font-bold text-black">
                Generate a Playlist
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Tell us about your mood, genre, and activity preferences to get
                a custom playlist.
              </p>
            </div>
            <form className="space-y-6" onSubmit={handleGeneratePlaylist}>
              <div className="space-y-4">
                <Label htmlFor="mood" className="text-black text-sm">
                  Mood
                </Label>
                <Input
                  id="mood"
                  placeholder="Happy, Sad, Energetic"
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  className="w-full border rounded-lg p-3 text-sm"
                />
              </div>
              <div className="space-y-4">
                <Label htmlFor="genre" className="text-black text-sm">
                  Genre
                </Label>
                <Input
                  id="genre"
                  placeholder="Pop, Rock, Classical"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="w-full border rounded-lg p-3 text-sm"
                />
              </div>
              <div className="space-y-4">
                <Label htmlFor="activity" className="text-black text-sm">
                  Activity
                </Label>
                <Input
                  id="activity"
                  placeholder="Running, Studying, Relaxing"
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="w-full border rounded-lg p-3 text-sm"
                />
              </div>
              <div className="flex items-center justify-center">
                <Button
                  type="submit"
                  className="bg-black text-white mt-6 px-5 py-3 md:px-6 md:py-3 rounded-lg flex items-center justify-center gap-2 text-sm"
                >
                  {loading ? ( // Show loading indicator if loading is true
                    <>
                      <span className="animate-spin">&#x21bb;</span> Generating
                      Playlist...
                    </>
                  ) : (
                    <>
                      Generate Playlist <span className="text-xs">🎧</span>
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg md:text-3xl font-bold text-black">
                Your Personalized Playlist
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Based on your preferences, here's a playlist we think you'll
                love.
              </p>
            </div>
            <div className="space-y-4">
              {playlist.length === 0 ? (
                <p className="text-gray-600">No songs generated yet.</p>
              ) : (
                <>
                  {playlist.map((song, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 ${
                        index >= 4 && !seeMoreClicked ? "hidden" : ""
                      }`}
                    >
                      <div className="w-16 h-16 rounded">
                        {song.albumCover ? (
                          <img
                            src={song.albumCover}
                            alt={`${song.title} - ${song.artist} Album Cover`}
                            className="w-full h-full object-cover rounded"
                          />
                        ) : (
                          renderPlaceholder(index)
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-black text-sm md:text-base">
                          {song.title}
                        </div>
                        <div className="text-sm text-gray-600">
                          {song.artist}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className="flex justify-between items-center">
              {playlist.length > 4 && (
                <Link
                  href="#"
                  onClick={handleSeeMoreClick}
                  className="text-black cursor-pointer"
                >
                  {seeMoreClicked ? "Show less" : "See more"}
                </Link>
              )}
              <Button className="bg-white text-black border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-2 text-sm md:text-base">
                Connect to Spotify
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
