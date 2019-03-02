
export const fetchPlaylists = () => {
  return({
    method: "GET",
    url: `api/playlists`
  });
};

export const fetchPlaylist = (id) => {
  return({
    method: "GET",
    url: `api/playlists/${id}`
  });
};

export const createPlaylist = (playlist) => {
  return({
    method: "POST",
    url: `api/playlists/`,
    data: { playlist }
  });
};

export const updatePlaylist = (playlist) => {
  return({
    method: "PATCH",
    url: `api/playlists/`,
    data: { playlist }
  });
};

export const deletePlaylist = (id) => {
  return({
    method: "PATCH",
    url: `api/playlists/${id}`
  });
};