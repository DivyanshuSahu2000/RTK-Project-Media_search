import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;

// export const fetchPhotos = async (query, page = 1, per_page = 20) => {
//   const res = await axios.get("https://api.unsplash.com/search/photos", {
//     params: { query, page, per_page },
//     headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
//   });
//   return res.data;
// };

export async function fetchPhotos(query, page = 1, per_page = 20) {
  //   const res = await axios.get("https://api.unsplash.com/search/photos", {
  const res = await axios.get(" https://api.pexels.com/v1/search", {
    params: { query, page, per_page },
    // headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
    headers: { Authorization: PEXELS_KEY },
  });
  console.log(res.data);

  return res.data.photos;
}
export const fetchVideos = async (query, per_page = 20) => {
  const res = await axios.get("https://api.pexels.com/videos/search", {
    params: { query, per_page },
    headers: { Authorization: PEXELS_KEY },
  });
  return res.data.videos;
};
export const fetchGif = async (query, limit = 20) => {
  const res = await axios.get("https://tenor.googleapis.com/v2/search", {
    params: { q: query, key: TENOR_KEY, limit },
  });
  //   console.log(res.data.results);

  return res.data.results;
};

// export async function fetchGif(query, limit = 20) {
//   const res = await axios.get("https://tenor.googleapis.com/v2/search", {
//     params: { q: query, key: TENOR_KEY, limit },
//   });
//   return res;
// }
// fetchGif();
