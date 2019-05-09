export const fetchAlbums = (queries) => {
  return $.ajax({
    method: "GET",
    url: `/api/albums`,
    data: {queries}
  });
};

export const fetchAlbum = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/albums/${id}`
  });
};

