export const fetchArtists = (queries) => {
  return $.ajax({
    method: "GET",
    url: `/api/artists`,
    data: {queries}
  });
};

export const fetchArtist = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/artists/${id}`
  });
};

