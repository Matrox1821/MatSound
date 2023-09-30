/* //user
export const getUserPlaylists = (url: string) =>
  fetch(`http://localhost:3000/api/user/${url}`).then((r) => r.json());

export const getCurrentUserPlaylists = (url: string) =>
  fetch(`http://localhost:3000/api/user/playlists${url}`).then((r) => r.json());

export const getArtistsFollowing = (url: string) =>
  fetch(`http://localhost:3000/api/user/following?${url}`).then((r) =>
    r.json()
  );

//playlist
export const getPlaylistById = (url: string) =>
  fetch(`http://localhost:3000/api/playlist?${url}`).then((r) => r.json());

//album
export const getAlbumById = (url: string) =>
  fetch(`http://localhost:3000/api/album?${url}`).then((r) => r.json());

export const getArtistAlbums = (url: string) =>
  fetch(`http://localhost:3000/api/artist/albums?${url}`).then((r) => r.json());

export const getArtistById = (url: string) =>
  fetch(`http://localhost:3000/api/artist?${url}`).then((r) => r.json());

//track
export const getTrakById = (url: string) =>
  fetch(`http://localhost:3000/api/track?${url}`).then((r) => r.json());
 */
export const getUserPlaylists = (url: string) =>
  fetch(`https://matfy-eight.vercel.app/api/user/${url}`).then((r) => r.json());

export const getCurrentUserPlaylists = (url: string) =>
  fetch(`https://matfy-eight.vercel.app/api/user/playlists${url}`).then((r) =>
    r.json()
  );

export const getArtistsFollowing = (url: string) =>
  fetch(`https://matfy-eight.vercel.app/api/user/following?${url}`).then((r) =>
    r.json()
  );

export const getPlaylistById = (url: string) =>
  fetch(`https://matfy-eight.vercel.app/api/playlist?${url}`).then((r) =>
    r.json()
  );

export const getAlbumById = (url: string) =>
  fetch(`https://matfy-eight.vercel.app/api/album?${url}`).then((r) =>
    r.json()
  );

export const getArtistAlbums = (url: string) =>
  fetch(`https://matfy-eight.vercel.app/api/artist/albums?${url}`).then((r) =>
    r.json()
  );

export const getTraksById = (url: string) =>
  fetch(`https://matfy-eight.vercel.app/api/track?${url}`).then((r) =>
    r.json()
  );

export const getArtistById = (url: string) =>
  fetch(`https://matfy-eight.vercel.app/api/artist?${url}`).then((r) =>
    r.json()
  );
