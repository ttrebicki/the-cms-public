import { createSlice } from '@reduxjs/toolkit';

import { createNewPost, editPost } from './EditPost.thunks';
import { IPostFormData } from '../../../../../api/cms/types';

export interface CreateNewPostState {
	post: IPostFormData | null;
	status: 'idle' | 'loading' | 'failed';
}

const initialState: CreateNewPostState = {
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
			.addCase(createNewPost.fulfilled, (state, action) => {
				state.status = 'idle';
				state.post = action.payload;
			})
			.addCase(editPost.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(editPost.fulfilled, (state, action) => {
				state.status = 'idle';
				state.post = action.payload.post;
			});
	},
});

export default EditPostSlice.reducer;
