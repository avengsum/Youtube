import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name : "chat",
    initialState:{
        chatMessage:[]
    },
    reducers:{
        addMessage : (state,action) => {
            state.chatMessage.splice(20,2)
            state.chatMessage.unshift(action.payload)

        },
    
    }
})

export const {addMessage} = chatSlice.actions
export default chatSlice.reducer