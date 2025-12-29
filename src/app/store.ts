import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../pages/home/homeSlice";
import githubReducer from "../pages/github/githubSlice";
import rootReducer from "../layouts/root/rootSlice";
import certificateModal from "../components/global/certificateModal/certificateModal";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    github: githubReducer,
    root: rootReducer,
    certificateModal: certificateModal,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
