import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

import { IPost } from '../../../api/cms/types';
import getPostsFromAPI from '../../../models/global/actions/getPostsFromApi';

export interface PostsManagerState {
	posts: IPost[];
	selectedPost: IPost | null;
	showCreateNewPost: boolean;
	showEditPost: boolean;
	status: 'idle' | 'loading' | 'failed';
}

const initialState: PostsManagerState = {
	posts: [],
	selectedPost: null,
	showCreateNewPost: false,
	showEditPost: false,
	status: 'idle',
};

export const PostsManagerSlice = createSlice({
	name: 'PostsManager',
	initialState,
	reducers: {
		toggleCreateNewPost(state) {
			state.showCreateNewPost = !state.showCreateNewPost;
		},
		toggleEditPost(state) {
			state.showEditPost = !state.showEditPost;
		},
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

export const { toggleCreateNewPost, toggleEditPost, setSelectedPost } =
	PostsManagerSlice.actions;
export const selectPosts = (state: RootState) => state.postsManager.posts;
export const getSelectedPost = (state: RootState) =>
	state.postsManager.selectedPost;
export const showCreateNewPostFromState = (state: RootState) =>
	state.postsManager.showCreateNewPost;
export const showEditPostFromState = (state: RootState) =>
	state.postsManager.showEditPost;

export default PostsManagerSlice.reducer;
