import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Label from "@/components/ui/label";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function Body() {
  return (
    <div>
      <Navbar />
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Generate</h2>
            <p className="text-muted-foreground">
              Tell us about your mood, genre, and activity preferences to get a
              custom playlist.
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="mood">Mood</Label>
              <Input id="mood" placeholder="Enter your mood" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="genre">Genre</Label>
              <Input id="genre" placeholder="Enter your genre" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="activity">Activity</Label>
              <Input id="activity" placeholder="Enter your activity" />
            </div>
            <div className="flex items-center justify-center">
              <Button
                type="submit"
                className="w-1/3 flex items-center justify-center gap-2 mt-4"
              >
                <span>Generate Playlist</span>
                <span>🎧</span>
              </Button>
            </div>
          </form>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Your Personalized Playlist</h2>
            <p className="text-muted-foreground">
              Based on your preferences, here's a playlist we think you'll love.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/placeholder.svg"
                alt="Song Cover"
                width={64}
                height={64}
                className="rounded-md"
              />
              <div>
                <div className="font-medium">Upbeat Pop Song</div>
                <div className="text-sm text-muted-foreground">Artist Name</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/placeholder.svg"
                alt="Song Cover"
                width={64}
                height={64}
                className="rounded-md"
              />
              <div>
                <div className="font-medium">Relaxing Piano Piece</div>
                <div className="text-sm text-muted-foreground">Artist Name</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/placeholder.svg"
                alt="Song Cover"
                width={64}
                height={64}
                className="rounded-md"
              />
              <div>
                <div className="font-medium">Energetic Rock Track</div>
                <div className="text-sm text-muted-foreground">Artist Name</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Link href="#" className="text-primary" prefetch={false}>
              See more
            </Link>
            <Button
              //variant="outline"
              className="flex items-center justify-center gap-2 w-1/3"
            >
              <AirplayIcon className="w-5 h-5" />
              Connect to Spotify
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function AirplayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
      <path d="m12 15 5 6H7Z" />
    </svg>
  );
}
