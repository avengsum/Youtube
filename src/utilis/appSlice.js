import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    iname:'app',
    initialState:{
        isSideBar : true,
    },
    reducers:{
        toogle: (state) => {
            state.isSideBar = !state.isSideBar;
        }
    }
})

export const {toogle} = appSlice.actions;

export default appSlice.reducer;