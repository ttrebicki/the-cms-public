import { IPost } from '../../../api/posts/types';

export interface IPostFormData {
	content: string;
	images?: string[];
	thumbnailImage?: string;
	title: string;
}

export interface EditPostState {
	post: IPostFormData | null;
	status: 'idle' | 'loading' | 'failed';
}

export interface PostsManagerState {
	posts: IPost[];
	selectedPost: IPost | null;
	status: 'idle' | 'loading' | 'failed';
}
