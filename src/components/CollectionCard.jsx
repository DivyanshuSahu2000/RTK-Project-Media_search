import React from "react";
import { useDispatch } from "react-redux";
import { removeCollection } from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromeCollections = (item) => {
    dispatch(removeCollection(item.id));
  };
  return (
    <div className="">
      <div className="w-full max-w-56 relative aspect-[3/4] bg-white rounded-xl overflow-hidden">
        <a target="_blank" className="h-full" href={item.url}>
          {item.type == "photo" ? (
            <img
              className="h-full w-full object-cover object-center"
              src={item.src}
              alt=""
            />
          ) : (
            ""
          )}
          {item.type == "video" ? (
            <video
              className="h-full w-full object-cover object-center"
              autoPlay
              loop
              muted
              src={item.src}
            ></video>
          ) : (
            ""
          )}
          {item.type == "gif" ? (
            <img
              className="h-full w-full object-cover object-center"
              src={item.src}
              alt=""
            />
          ) : (
            ""
          )}
        </a>{" "}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 flex justify-between items-center">
          <h2 className="text-sm sm:text-base font-semibold text-white line-clamp-2">
            {item.title}
          </h2>

          <button
            onClick={() => {
              removeFromeCollections(item);
            }}
            className="bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs sm:text-sm rounded px-3 py-1"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
