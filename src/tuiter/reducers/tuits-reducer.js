import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";
import { deleteTuitThunk, findTuitsThunk, createTuitThunk } from "../services/tuit-thunks";
const initialState = {
  tuits: [],
  loading: false,
};

const currentUser = {
  userName: "NASA",
  handle: "@nasa",
  image: "nasa.png",
};

const templateTuit = {
  ...currentUser,
  topic: "Space",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState,
  extraReducers: {
    [createTuitThunk.fulfilled]:
    (state, { payload }) => {
      state.loading = false
      state.tuits.push(payload)
  },
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = state.tuits.filter((t) => t._id !== payload);
    },
    [findTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
    },
    [findTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
  reducers: {
    createTuit(state, action) {
      console.log({ ...action.payload });
      state.tuits.unshift({
        ...action.payload,
        ...templateTuit,
        _id: new Date().getTime(),
      });
      console.log(tuits);
    },
    deleteTuit(state, action) {
      const index = state.tuits.findIndex(
        (tuit) => tuit._id === action.payload
      );
      state.tuits.splice(index, 1);
    },
  },
});

export const { createTuit, deleteTuit, likesToggle } = tuitsSlice.actions;
export default tuitsSlice.reducer;
