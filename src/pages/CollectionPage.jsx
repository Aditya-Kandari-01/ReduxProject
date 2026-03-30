import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollections } from "../redux/features/collectionsSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();
  const clearCollection = () => {
    dispatch(clearCollections());
  };
  return (
    <div className="overflow-auto px-10 py-6">
      {collection.length > 0 ? (
        <div className="flex justify-between">
          <h2 className="text-xl font-medium">Your Colletion</h2>
          <button
            onClick={() => {
              clearCollection();
            }}
            className="active:scale-95 transition cursor-pointer bg-red-600 px-8 py-3 text-lg font-medium rounded"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="text-xl font-medium">Empty Collection</h2>
      )}

      <div className="flex justify-start w-full py-6 flex-wrap gap-6 px-10">
        {collection.map((item, idx) => (
          <div key={idx}>
            <CollectionCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
