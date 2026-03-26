import axios from "axios";

const unsplash = import.meta.env.VITE_UNSPLASH_KEY;
const pexels = import.meta.env.VITE_PEXELS_KEY;
const giphy = import.meta.env.VITE_GIPHY_KEY;

export async function fetchPhotos(query,page=1,per_page=10) {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: {query,page,per_page},
    headers: {Authorization:`Client-ID ${unsplash}`},
  });
  return res.data
}
export async function fetchVideos(query,page=1,per_page=10){
    const res = await axios.get("https://api.pexels.com/videos/search",{
        params:{query,page,per_page},
        headers:{Authorization:pexels}
    })
    return res.data
}
export async function fetchGif(query,limit=10,offset=0){
    const res = await axios.get("https://api.giphy.com/v1/gifs/search",{
        params:{
            api_key: giphy,
            q: query,
            limit,
            offset
        }
    })
    return res.data
}