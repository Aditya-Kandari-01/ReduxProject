import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "gif's", "videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-10 p-10">
      {tabs.map((ele, idx) => {
        return (
          <button
            className={`${activeTab === ele ? "bg-blue-700" : "bg-gray-600"} transition px-5 py-2 rounded uppercase cursor-pointer active:scale-95`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTab(ele));
            }}
          >
            {ele}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
