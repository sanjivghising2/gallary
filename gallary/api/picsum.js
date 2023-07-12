const BASE_URL = `https://picsum.photos/v2`;

export async function getList(page = 1, limit = 50) {
  const response = await fetch(`${BASE_URL}/list?page=${page}&limit=${limit}`);
  const photos = await response.json();
  return photos;
}

export function formatPhotoUri(id, width, height) {
  return `https://picsum.photos/id/${id}/${Math.floor(width)}/${Math.floor(height)}`;
}
