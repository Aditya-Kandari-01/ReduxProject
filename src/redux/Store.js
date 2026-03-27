import { configureStore } from "@reduxjs/toolkit";
// searchSlice.Reducer below:
// whatever we import using default we can name it
// according to our comfort i.e searchReducer as searchSlice.reducer
import searchReducer from "./features/searchSlice";
export const Store = configureStore({
    reducer : {
        search : searchReducer
    }
})