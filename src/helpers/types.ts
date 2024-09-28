export interface TrackObject {
  song: string;
  image?: ImageMetadata;
  name: string;
  artist: string;
  album?: string;
}
export interface TrackProps {
  song: string;
  image: ImageMetadata;
  name: string;
  artist: string;
  album?: string;
  id: string;
}

export interface AlbumObject {
  id: string;
  name: string;
  image: ImageMetadata;
  tracks: string[];
  artist: string;
}
export interface AlbumProps {
  id: string;
  name: string;
  image: ImageMetadata;
  tracks: TrackProps[];
  artist: string;
}

export interface ArtistObject {
  id: string;
  name: string;
  image: ImageMetadata;
  albums: string[];
}
export interface ArtistProps {
  id: string;
  name: string;
  image: ImageMetadata;
  albums: (AlbumProps | undefined)[];
}
