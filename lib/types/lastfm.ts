export const PERIOD = [
  "overall",
  "7day",
  "1month",
  "3month",
  "6month",
  "12month",
] as const;

export type Period = typeof PERIOD[number];

export type LastfmAPIParams = {
  method:
    | "user.getrecenttracks"
    | "user.gettopalbums"
    | "user.gettopartists"
    | "user.gettoptracks";
  period?: Period;
  limit?: number;
  from?: number;
  extended?: "0" | "1";
};

export type Track = {
  name: string;
  artist: string;
};

export type Album = {
  name: string;
  artist: string;
  image: string;
  playcount: string;
};

export type Artist = {
  name: string;
  playcount: string;
  image_url?: string;
};

export type Total = string;

export type RecentTrack = {
  track: Track & {
    album: string;
    image: string;
    timestamp: string | null;
    loved: boolean;
  };
  total: Total;
};

export type TopTracks = Track[];

export type TopAlbums = Album[];

export type TopArtists = Artist[];

export type TotalStats = { total: Total };