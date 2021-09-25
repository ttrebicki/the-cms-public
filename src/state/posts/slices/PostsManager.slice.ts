import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { getPostsFromAPI } from '../thunks';
import { PostsManagerState } from './types';

const initialState: PostsManagerState = {
	posts: [],
	selectedPost: null,
	status: 'idle',
};

export const PostsManagerSlice = createSlice({
	name: 'PostsManager',
	initialState,
	reducers: {
		setSelectedPost(state, action) {
			const getPostById = state.posts.filter(
				(post) => post._id === action.payload
			);

			state.selectedPost = getPostById[0];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getPostsFromAPI.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getPostsFromAPI.fulfilled, (state, action) => {
				state.status = 'idle';
				state.posts = action.payload;
			});
	},
});

export const { setSelectedPost } = PostsManagerSlice.actions;
export const selectPosts = (state: RootState) => state.postsManager.posts;
export const getSelectedPost = (state: RootState) =>
	state.postsManager.selectedPost;

export default PostsManagerSlice.reducer;
