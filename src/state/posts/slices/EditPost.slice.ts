import { createSlice } from '@reduxjs/toolkit';

import { createNewPost, editPost, deletePost } from '../thunks';
import { EditPostState } from './types';

const initialState: EditPostState = {
	post: null,
	status: 'idle',
};

export const EditPostSlice = createSlice({
	name: 'EditPost',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(createNewPost.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(createNewPost.fulfilled, (state) => {
				state.status = 'idle';
			})
			.addCase(editPost.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(editPost.fulfilled, (state) => {
				state.status = 'idle';
			})
			.addCase(deletePost.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(deletePost.fulfilled, (state) => {
				state.status = 'idle';
			});
	},
});

export default EditPostSlice.reducer;
