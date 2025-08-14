import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../pages/home/homeSlice";
import githubReducer from "../pages/github/githubSlice";
import rootReducer from "../layouts/root/rootSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    github: githubReducer,
    root: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
