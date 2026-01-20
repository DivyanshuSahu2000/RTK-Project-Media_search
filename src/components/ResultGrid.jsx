import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { store } from "../redux/store";
// import axios from "axios";
import { fetchGif, fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setError,
  setLoading,
  setResults,
} from "../redux/features/searchSlice";
import ResultCard from "./ResultCard";
// import { setquery } from "../redux/features/searchSlice";

const ResultGrid = () => {
  const { query, activeTab, results, error, loading } = useSelector(
    (store) => store.search
  );
  const dispatch = useDispatch();
  //   const activeTab = useSelector((state) => state.search.activeTab);
  //   const query = useSelector((state) => state.search.query);

  useEffect(() => {
    console.log("EFFECT RUN:", { query, activeTab });

    const getData = async () => {
      if (!query) return;
      let data = [];
      try {
        dispatch(setLoading());
        if (activeTab == "photos") {
          let res = await fetchPhotos(query);
          data = res.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
          console.log(data);
        }
        if (activeTab == "videos") {
          let res = await fetchVideos(query);
          data = res.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name,
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
          console.log(data);
        }
        if (activeTab == "gif") {
          let res = await fetchGif(query);
          data = res.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "GIF",
            url: item.url,
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
          }));
          console.log(data);
        }
        dispatch(setResults(data));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };
    getData();
  }, [query, activeTab]);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="flex justify-between w-full flex-wrap gap-6 overflow-auto px-10">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};
export default ResultGrid;
