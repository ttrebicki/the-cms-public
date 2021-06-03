import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

import { IPost } from "../../../api/cms/types";
import getPostsFromAPI from "../../../models/global/actions/getPostsFromApi";
import createNewPost from "../PostEditor/components/CreateNewPost/CreateNewPost.actions";
import { stat } from "fs";

export interface PostsManagerState {
  posts: IPost[];
  showCreateNewPost: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: PostsManagerState = {
  posts: [],
  showCreateNewPost: false,
  status: "idle",
};

export const PostsManagerSlice = createSlice({
  name: "PostsManager",
  initialState,
  reducers: {
    toggleCreateNewPost(state) {
      state.showCreateNewPost = !state.showCreateNewPost;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsFromAPI.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPostsFromAPI.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = action.payload;
      })
      .addCase(createNewPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.status = "idle";
      });
  },
});

export const { toggleCreateNewPost } = PostsManagerSlice.actions;
export const selectPosts = (state: RootState) => state.postsManager.posts;
export const showCreateNewPostFromState = (state: RootState) =>
  state.postsManager.showCreateNewPost;

export default PostsManagerSlice.reducer;
