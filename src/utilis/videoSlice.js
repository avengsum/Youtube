import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:"video",
    initialState:{
        videoData:[]
    },
    reducers:{
        addVideo: (state,action) => {
            state.videoData.push(action.payload)
        }
    }
})

export const {addVideo} = videoSlice.actions;
export default videoSlice.reducer