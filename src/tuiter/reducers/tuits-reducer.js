import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "image": "nasa.png",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": false,
 "replies": 0,
 "retuits": 0,
 "likes": 0,
}

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: { tuits: tuits },
 reducers: {
    createTuit(state, action) {
        console.log({...action.payload});
        state.tuits.unshift({
          ...action.payload,
          ...templateTuit,
          _id: (new Date()).getTime(),
        })
        console.log(tuits);

      },
    deleteTuit(state, action) {
        const index = state.tuits
           .findIndex(tuit =>
              tuit._id === action.payload);
        state.tuits.splice(index, 1);
      }, 
 }
});

export const {createTuit, deleteTuit, likesToggle} = tuitsSlice.actions;
export default tuitsSlice.reducer;