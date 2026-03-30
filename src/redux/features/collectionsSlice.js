import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Zoom } from "react-toastify";
const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExists = state.items.some((i) => i.id === action.payload.id);
      if (!alreadyExists) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },
    removeCollection: (state, action) => {
      // items are defined above in line 3 within initialState
      state.items = state.items.filter((i) => i.id !== action.payload);
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    clearCollections: (state) => {
      state.items = [];
      localStorage.removeItem("collection");
    },
    addedToast: () => {
      toast.success("⭐ Added To Collection", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
    removedToast: () => {
      toast.success("✅ Removed Successfully!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
  },
});

export const { addCollection, removeCollection, clearCollections, addedToast, removedToast } =
  collectionSlice.actions;

export default collectionSlice.reducer;
