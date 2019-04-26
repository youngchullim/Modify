export const createPlaylistsSong = (playlistsSong) => {
  return $.ajax({
    method: "POST",
    url: "/api/playlists_songs",
    data: { playlistsSong }
  });
};

export const deletePlaylistsSong = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/playlists_songs/${id}`
  });
};

export const fetchPlaylistsSongs = () => {
  return $.ajax({
    method: "GET",
    url: `/api/playlists_songs`
  });
};