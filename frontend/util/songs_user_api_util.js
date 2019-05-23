export const createSongsUser = (songsUser) => {
  return $.ajax({
    method: "POST",
    url: "/api/songs_users",
    data: { songsUser }
  });
};

export const deleteSongsUser = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/songs_users/${id}`
  });
};

export const fetchSongsUsers = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}/songs_users`
  });
};

export const fetchCurrentSong = (userId, id) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/songs/${id}`
  });
};