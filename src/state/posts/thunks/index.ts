import { createAsyncThunk } from '@reduxjs/toolkit';

import PostsApi from '../../../api/posts';
import { IEditPostPayload } from '../../../components/systems/EditPost/EditPost.types';
import { IPostFormData } from '../slices/types';
import { store } from '../../store';
import { Routes } from '../../../router/routes';

const getPostsFromAPI = createAsyncThunk(
	'getPostsFromAPI',
	async (_id?: string) => {
		const { data } = await PostsApi.getPosts(_id && _id);

		return data;
	}
);
const createNewPost = createAsyncThunk(
	'createNewPost',
	async (post: IPostFormData) => {
		const parsedPost = JSON.stringify(post);

		await PostsApi.createNewPost(parsedPost)

		window.location.replace(Routes.MANAGE_POSTS)
	}
);
const editPost = createAsyncThunk(
	'editPost',
	async (post: IEditPostPayload) => {
		const parsedPost = JSON.stringify(post.post);

		await PostsApi.editPost(post.id, parsedPost);
	}
);
const deletePost = createAsyncThunk('deletePost', async (id: string) => {
	await PostsApi.deletePost(id).then(() => store.dispatch(getPostsFromAPI()));
});

export { deletePost, getPostsFromAPI, editPost, createNewPost };
