import { IPostFormData } from '../../../state/posts/slices/types';
import { IPost } from '../../../api/posts/types';

export interface IEditPostProps {
	usage: 'create' | 'edit';
}

export interface IEditPostPayload {
	id: string;
	post: IPostFormData;
}

export interface IFormikProps {
	isCreate: boolean;
	isEdit: boolean;
	selectedPost: IPost | null;
}
