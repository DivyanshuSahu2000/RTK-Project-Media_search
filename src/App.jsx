import React from "react";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";
import { fetchGif } from "./api/mediaApi";
import CollectionPage from "./pages/collectionPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage></CollectionPage>} />
      </Routes>
    </div>
  );
};

export default App;
