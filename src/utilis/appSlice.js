import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
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