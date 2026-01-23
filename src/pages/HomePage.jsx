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
        ""
      )}
    </div>
  );
};

export default HomePage;
