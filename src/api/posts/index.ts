import axios from 'axios';
import { INewPostResponse } from './types';
import { Env } from '../../consts/env';

class PostsApi {
	public createNewPost(post: string): Promise<INewPostResponse> {
		const createConfig = {
			url: `${Env.API_URL}/posts`,
			headers: {
				'Content-Type': 'application/json',
			},
			data: post,
		};

		return new Promise<INewPostResponse>((resolve, reject) => {
			axios({ ...createConfig, method: 'POST' })
				.then((response) => {
					resolve(response.data);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}

	public editPost(id: string, post: string): Promise<INewPostResponse> {
		const editConfig = {
			url: `${Env.API_URL}/posts/${id}`,
			headers: {
				'Content-Type': 'application/json',
			},
			data: post,
		};

		return new Promise<INewPostResponse>((resolve, reject) => {
			axios({ ...editConfig, method: 'PUT' })
				.then((response) => {
					resolve(response.data);
				})
				.catch((error) => reject(error));
		});
	}

	public deletePost(id: string): Promise<void> {
		const deleteConfig = {
			url: `${Env.API_URL}/posts/${id}`,
			headers: {
				'Content-Type': 'application/json',
			},
		};

		return new Promise<void>((resolve, reject) => {
			axios({ ...deleteConfig, method: 'DELETE' })
				.then((response) => resolve(response.data))
				.catch((error) => {
					console.error(error);
					reject(error);
				});
		});
	}

	public getPosts(id?: string): Promise<INewPostResponse> {
		const getConfig = {
			url: id
				? `${Env.API_URL}/posts/${id}`
				: `${Env.API_URL}/posts`,
			headers: {
				'Content-Type': 'application/json',
			},
		};

		return new Promise<INewPostResponse>((resolve, reject) => {
			axios({ ...getConfig, method: 'GET' })
				.then((response) => {
					resolve(response.data);
				})
				.catch((error) => reject(error));
		});
	}
}

export default new PostsApi();
