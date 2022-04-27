import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name:"message",
    initialState: { messages:[] },
    reducers: {
        add(state,{payload}){
            state.messages.push(payload);
        },
        delete(state,{payload}){
            state.messages = state.messages.filter(item => item.id !== payload);
        }
    },
});

export const messageActions = messageSlice.actions;

export default messageSlice;