import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Handler function for API route 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { mood, genre, activity } = req.body;

        if (!mood || !genre || !activity) {
            return res.status(400).json({ error: 'Mood, genre, and activity are required' });
        }

        try {
            const prompt = `Create a list of fifteen songs based on the following inputs: Mood: ${mood}, Genre: ${genre}, Activity: ${activity}.`;

            // Generate songs list using the generative model 
            const generatedResponse = await generateSongs(prompt);

            // Logging response so I can identify if everything is correct
            console.log('Raw generated response:', generatedResponse);

            // Parsing the response 
            const songsArray = parseSongs(generatedResponse);

            console.log('Parsed songs array:', songsArray);

            // Fetch album covers 
            const playlistWithCovers = await fetchAlbumCovers(songsArray);

            res.status(200).json({ playlist: playlistWithCovers });
        } catch (error: any) {
            console.error('Error generating playlist:', error);
            res.status(500).json({ error: 'Failed to generate playlist' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

// Function to generate songs list using gen model 
async function generateSongs(prompt: string): Promise<string> {

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const result = await model.generateContent(prompt);
        const generatedResponse = await result.response.text();
        return generatedResponse;
    } catch (error) {
        throw new Error(`Failed to generate songs: ${error}`);
    }
}

// Function to parse the generated response into an array of songs
function parseSongs(generatedResponse: string): { title: string; artist: string }[] {
    const songsArray = generatedResponse.split('\n').map(song => {
        let title = "";
        let artist = "";

        // Check if the song contains " - " 
        const delimiterIndex = song.indexOf(" - ");
        if (delimiterIndex !== -1) {
            title = song.slice(0, delimiterIndex).trim();
            artist = song.slice(delimiterIndex + 3).trim();
        } else {
            // If no " - " is found
            const match = song.match(/"(.+?)"(?: by )?(.+)/);
            if (match) {
                title = match[1].trim();
                artist = match[2].trim();
            } else {
                // Fallback 
                const parts = song.split(' by ');
                if (parts.length === 2) {
                    title = parts[0].trim();
                    artist = parts[1].trim();
                } else {
                    // Fallback 
                    title = song.trim();
                    artist = "Unknown";
                }
            }
        }

        return { title, artist };
    }).filter((song): song is { title: string; artist: string } => !!song);

    return songsArray;
}

// Function to fetch album covers for each song from Spotify
async function fetchAlbumCovers(songsArray: { title: string; artist: string }[]): Promise<{ title: string; artist: string; albumCover: string | null }[]> {
    try {
        const accessToken = await getAccessToken();

        const promises = songsArray.map(async (song) => {
            const { title, artist } = song;
            const searchQuery = encodeURIComponent(`${title} artist:${artist}`);
            const response = await fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=album`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch album data from Spotify: ${response.statusText}`);
            }

            const data = await response.json();
            const album = data.albums?.items[0];
            const albumCoverUrl = album?.images?.[0]?.url || null;

            return { ...song, albumCover: albumCoverUrl };
        });

        const playlistWithCovers = await Promise.all(promises);
        return playlistWithCovers;
    } catch (error) {
        console.error('Error fetching album covers:', error);
        return songsArray.map(song => ({ ...song, albumCover: null }));
    }
}

// Function to get Spotify access token
async function getAccessToken(): Promise<string> {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    });

    if (!response.ok) {
        throw new Error(`Failed to retrieve Spotify access token: ${response.statusText}`);
    }

    const data = await response.json();
    return data.access_token;
}
