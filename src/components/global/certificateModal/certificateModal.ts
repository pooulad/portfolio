import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { Certification } from "../../../ts/types";

export interface certificateModalState {
    openModal: boolean;
    certificateData: Certification;
}

const initialState: certificateModalState = {
    openModal: false,
    certificateData: {
        id: "0",
        title: "",
        provider: "",
        date: "",
        image: "",
        skills: [],
        link: "",
    },
};

export const certificateModalSlice = createSlice({
    name: "certificateModalSlice",
    initialState,
    reducers: {
        certificateModalOpenAction: (state, action) => {
            state.openModal = true;
            state.certificateData = action.payload.certificateData;
        },
        certificateModalCloseAction: (state) => {
            state.openModal = false;
        },
    },
});

export const { certificateModalCloseAction, certificateModalOpenAction } =
    certificateModalSlice.actions;

export const certificateModal = (state: RootState) => state.certificateModal;

export default certificateModalSlice.reducer;
