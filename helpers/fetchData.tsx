export const getUserPlaylists = (url: string) =>
  fetch(`http://matfy-izdr.vercel.app/api/user/${url}`).then((r) => r.json());

export const getCurrentUserPlaylists = (url: string) =>
  fetch(`http://matfy-izdr.vercel.app/api/user/playlists${url}`).then((r) =>
    r.json()
  );

export const getArtistsFollowing = (url: string) =>
  fetch(`http://matfy-izdr.vercel.app/api/user/following?${url}`).then((r) =>
    r.json()
  );

export const getPlaylistById = (url: string) =>
  fetch(`http://matfy-izdr.vercel.app/api/playlist?${url}`).then((r) =>
    r.json()
  );

export const getAlbumById = (url: string) =>
  fetch(`http://matfy-izdr.vercel.app/api/album?${url}`).then((r) => r.json());

export const getArtistAlbums = (url: string) =>
  fetch(`http://matfy-izdr.vercel.app/api/artist/albums?${url}`).then((r) =>
    r.json()
  );

export const getTraksById = (url: string) =>
  fetch(`http://matfy-izdr.vercel.app/api/track?${url}`).then((r) => r.json());

export const getArtistById = (url: string) =>
  fetch(`http://matfy-izdr.vercel.app/api/artist?${url}`).then((r) => r.json());
