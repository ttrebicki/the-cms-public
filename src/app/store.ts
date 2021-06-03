import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import PostsManagerReducer from "../components/systems/PostsManager/PostsManager.slice";
import CreateNewPostReducer from "../components/systems/PostEditor/components/CreateNewPost/CreateNewPost.slice";

export const store = configureStore({
  reducer: {
    createNewPost: CreateNewPostReducer,
    postsManager: PostsManagerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
