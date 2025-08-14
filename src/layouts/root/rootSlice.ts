import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IRootState {
  dir: string;
}

const initialState: IRootState = {
  dir: "ltr",
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    rootDirectionCacheAction: (state, action: PayloadAction<string>) => {
      state.dir = action.payload;
    },
  },
});

export const { rootDirectionCacheAction } = rootSlice.actions;

export const root = (state: RootState) => state.root;

export default rootSlice.reducer;
