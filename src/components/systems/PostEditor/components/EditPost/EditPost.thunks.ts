import { createAsyncThunk } from '@reduxjs/toolkit';
import PostsApi from '../../../../../api/cms/cms';
import { IPost, IPostFormData } from '../../../../../api/cms/types';
import { IEditPostPayload } from './EditPost.types';

const createNewPost = createAsyncThunk(
	'createNewPost',
	async (post: IPostFormData) => {
		const parsedPost = JSON.stringify(post);
		await PostsApi.createNewPost(parsedPost);
		return post;
	}
);

const editPost = createAsyncThunk(
	'editPost',
	async (post: IEditPostPayload) => {
		const parsedPost = JSON.stringify(post.post);
		await PostsApi.editPost(post.id, parsedPost);
		return post;
	}
);

export { createNewPost, editPost };
