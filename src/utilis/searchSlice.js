import { createSlice } from "@reduxjs/toolkit";

const searchSLice = createSlice({
    name:"search",
    initialState: {
        searchCache:{

        }
    },
    reducers:{
        cacheResult : (state,action) => {
            state.searchCache = {...state.searchCache , ...action.payload}
        },
    },
})

export const { cacheResult } = searchSLice.actions;
export default searchSLice.reducer;