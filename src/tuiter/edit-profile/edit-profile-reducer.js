import { createSlice } from "@reduxjs/toolkit";
import profileArray from "../profile/profile.json";
   
const currentUser = [{
    "_id": 123,
    "firstName": "Frodo",
    "lastName": "Baggins",
    "handle": "@ringbearer",
    "profilePicture": "frodo.jpeg",
    "bannerPicture": "bagend.jpeg",
    "bio": "Bilbo used often to say there was only one Road; that it was like a great river: its springs were at every doorstep, and every path was its tributary.",
    "location": "The West",
    "website": "www.theshire.com",
    "dateOfBirth": "9/22/4094",
    "dateJoined": "9/23/2011",
    "followingCount": 945453,
    "followerCount": 7452234
  }]

const profileSlice = createSlice({
 name: "profile",
 initialState: currentUser,
 reducers: {
    changeValue(state, action) {
        return state = action.payload;

      }

  }``
});

export const {changeValue} = profileSlice.actions;
export default profileSlice.reducer;