import { createSlice } from '@reduxjs/toolkit';

import createNewPost from "./CreateNewPost.actions";

export interface CreateNewPostState {
    post: string | null;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CreateNewPostState = {
    post: null,
    status: 'idle',
};

export const CreateNewPostSlice = createSlice({
    name: 'CreateNewPost',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(createNewPost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createNewPost.fulfilled, (state, action) => {
                state.status = 'idle';
                state.post = JSON.parse(action.payload);
            });
    },
});

// export const selectPost = (state: RootState) => state.createNewPost.post;
// export const showCreateNewPostFromState = (state: RootState) => state.createNewPost.showCreateNewPost;

export default CreateNewPostSlice.reducer;
