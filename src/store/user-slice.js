import { createSlice } from "@reduxjs/toolkit";
import avatar from "../assets/images/avatar.png";

const initialValue = {
  users: [
    { userName: "user1", messages: [], active: true, avatar },
    { userName: "user2", messages: [], active: false, avatar },
    { userName: "user2", messages: [], active: false, avatar },
  ],
};

const userSlice = createSlice({
  name: "message",
  initialState: initialValue,
  reducers: {
    changeActiveUser(state, { payload }) {
      const activeUser = state.users.find((item) => item.active);
      if (payload === activeUser.userName) return;
      activeUser.active = false;
      const newActiveUser = state.users.find(
        (item) => item.userName === payload
      );
      newActiveUser.active = true;
    },
    sendMessage(state, { payload }) {
      const activeUser = state.users.find((item) => item.active);
      activeUser.messages.push(payload);
    },
    deleteMessage(state, { payload }) {
      const activeUser = state.users.find((item) => item.active);
      activeUser.messages = activeUser.messages.filter(
        (item) => item.id !== payload
      );
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
