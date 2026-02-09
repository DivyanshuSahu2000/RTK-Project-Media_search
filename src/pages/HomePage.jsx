import React from "react";
import SearchBar from "../components/SearchBar";
import ResultGrid from "../components/ResultGrid";
import Tabs from "../components/Tabs";
import { useSelector } from "react-redux";

const HomePage = () => {
  const query = useSelector((store) => store.search.query);
  return (
    <div>
      <SearchBar />
      {query != "" ? (
        <div>
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        <>
          {" "}
          <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
            <p className="pulse-text text-gray-400 text-lg sm:text-xl font-medium max-w-xl">
              Nothing here yet — type something in the search bar to find media!
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
