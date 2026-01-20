import React from "react";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";
import { fetchGif } from "./api/mediaApi";

const App = () => {
  const getGifs = async () => {
    const data = await fetchGif("cat");
    console.log(data);
  };
  return (
    <div className="h-screen w-full bg-gray-900 text-white">
      <SearchBar />
      <Tabs />
      <ResultGrid />
      <button className="bg-blue-300 p-3 m-2.5" onClick={getGifs}>
        Get Gifs
      </button>
    </div>
  );
};

export default App;
