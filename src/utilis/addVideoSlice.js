import { createSlice } from "@reduxjs/toolkit";

const addVideo = createSlice({
    name:'add',
    initialState:{
        video:[],
    },
    reducers:{
        add:(state,action) => {
            state.video.push(action.payload)
        }
    }
})

export const {add} = addVideo.actions;
export default addVideo.reducer