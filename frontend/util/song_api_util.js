export const fetchSongs = (queries) => {
  return $.ajax({
    method: "GET",
    url: `/api/songs`,
    data: {queries}
  });
};

export const fetchSong = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/songs/${id}`
  });
};

