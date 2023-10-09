import SpotifyWebApi from "spotify-web-api-node";

SpotifyWebApi;
const scope = [
  "ugc-image-upload",
  "playlist-modify-private",
  "playlist-modify-public",
  "user-follow-modify",
  "user-read-playback-position",

  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  // "user-library-modify",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-read",
].join(",");

const params = {scope};

const queryParamsString = new URLSearchParams(params).toString();

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamsString}`;

const spotifyApi = new SpotifyWebApi({
  clientId: `${process.env.NEXT_PUBLIC_CLIENT_ID}`,
  clientSecret: `${process.env.NEXT_PUBLIC_CLIENT_SECRET}`,
});

export default spotifyApi;

export {LOGIN_URL};
