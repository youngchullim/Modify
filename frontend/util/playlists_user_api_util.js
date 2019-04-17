export const createPlaylistsUser = (playlistsUser) => {
  return $.ajax({
    method: "POST",
    url: "/api/playlists_users",
    data: { playlistsUser }
  });
};

export const deletePlaylistsUser = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/playlists_users/${id}`
  });
};

export const fetchPlaylistsUsers = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}/playlists_users`
  });
};