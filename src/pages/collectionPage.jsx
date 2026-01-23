import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);

  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(clearCollection());
  };

  return (
    <div className=" overflow-auto sm:px-10 sm:py-6 p-4">
      {collection.length > 0 ? (
        <div className="flex gap-2 items-center justify-between mb-6">
          <h2 className="md:text-3xl   text-lg font-medium">Your Collection</h2>
          <button
            onClick={() => {
              clearAll();
            }}
            className="active:scale-95 text-base transition cursor-pointer bg-red-600 sm:px-6 px-4 py-3 sm:text-lg font-medium rounded"
          >
            Clear All
          </button>
        </div>
      ) : (
        <h2 className="text-5xl py-10 text-gray-300 text-center font-medium">
          Collection is Empty
        </h2>
      )}

      <div className="flex sm:justify-start justify-around w-full flex-wrap gap-5">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
