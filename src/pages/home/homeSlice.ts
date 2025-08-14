import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IHomeState {
  actionStatus: "pending" | "rejected" | "fulfilled" | "none";
  alert: {
    error: boolean;
    message: string;
  };
}

const initialState: IHomeState = {
  actionStatus: "none",
  alert: {
    error: false,
    message: "",
  },
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
});

export const {} = homeSlice.actions;

export const home = (state: RootState) => state.home;

export default homeSlice.reducer;
