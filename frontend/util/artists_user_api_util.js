export const createArtistsUser = (artistsUser) => {
  return $.ajax({
    method: "POST",
    url: "/api/artists_users",
    data: { artistsUser }
  });
};

export const deleteArtistsUser = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/artists_users/${id}`
  });
};

export const fetchArtistsUsers = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}/artists_users`
  });
};