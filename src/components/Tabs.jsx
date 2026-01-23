import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  return (
    <div className="flex sm:gap-5 gap-2 sm:p-6 p-3">
      {tabs.map((tab, id) => {
        return (
          <button
            className={`${
              activeTab == tab ? "bg-green-500" : "bg-gray-500"
            } uppercase border-2 outline-none sm:px-4 sm:py-2 px-3 py-2 sm:text-lg text-sm rounded cursor-pointer active:scale-95`}
            key={id}
            onClick={() => {
              dispatch(setActiveTab(tab));
              console.log(activeTab);
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
