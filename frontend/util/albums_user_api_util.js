export const createAlbumsUser = (albumsUser) => {
  return $.ajax({
    method: "POST",
    url: '/api/albums_users',
    data: { albumsUser }
  });
};

export const deleteAlbumsUser = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/albums_users/${id}`
  });
};

export const fetchAlbumsUsers = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}/albums_users`
  });
};