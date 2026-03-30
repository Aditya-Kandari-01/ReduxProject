import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionsSlice";
const ResultCard = ({ item }) => {
  const dispatch = useDispatch()
  const addToCollection = (item) =>{
    dispatch(addCollection(item))
    dispatch(addedToast())
  }

  return (
    <div className="w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden">
      <a target="_blank" className="h-full" href={item.url}>
        {item.type == "photo" ? <img className="h-full w-full object-cover object-center" src={item.src} alt=""></img> : ""}
        {item.type == "video" ? (
          <video className="h-full w-full object-cover object-center" autoPlay loop src={item.src}></video>
        ) : (
          ""
        )}
        {item.type == "gif" ? <img className="h-full w-full object-cover gap-2 object-center" src={item.src} alt=""></img> : ""}
      </a>
      <div id='bottom' className="flex justify-between items-center w-full px-4 py-5 absolute bottom-0 text-white gap-2">
        <h2 className="text-xl font-semibold h-14 overflow-hidden capitalize">{item.title}</h2>
        <button onClick={()=>{
          addToCollection(item)
        }} className="bg-indigo-700 text-white rounded px-3 py-1 cursor-pointer font-medium active:scale-95">Save</button>
      </div>
    </div>
  );
};

export default ResultCard;
