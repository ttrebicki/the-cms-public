import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import PostsManagerReducer from '../components/systems/PostsManager/PostsManager.slice';
import EditPostReducer from '../components/systems/PostEditor/components/EditPost/EditPostSlice';

export const store = configureStore({
	reducer: {
		editPost: EditPostReducer,
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
