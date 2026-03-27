import { useEffect } from "react";
import { fetchPhotos, fetchVideos, fetchGif } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (state) => state.search,
  );

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data;
        if (activeTab == "photos") {
          let res = await fetchPhotos(query);
          data = res.results.map((item) => ({
            id: item.id,
            type: "photo",
            thumbnail: item.urls.small,
            src: item.urls.full,
            title: item.alt_description,
            url: item.links.html
          }));
        }
        if (activeTab == "videos") {
          let res = await fetchVideos(query);
          data = res.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url
          }));
        }
        if (activeTab == "gif's") {
          let res = await fetchGif(query);
          data = res.data.map((item) => ({
            id: item.id,
            type: item.type,
            thumbnail: item.images.downsized_small.mp4,
            src: item.images.downsized_large.url,
            title: item.title,
            url: item.embed_url
          }));
        }
        console.log(data)
        
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };
    getData();
  }, [query, activeTab, dispatch]);
  if (error) return <h1>Error</h1>;
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {results.map((item, idx) => {
        return <div key={idx}>{item.title}</div>
      })}
    </div>
  );
};

export default ResultGrid;
