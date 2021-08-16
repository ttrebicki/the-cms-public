import { IPostFormData } from '../../../../../api/cms/types';

export interface IEditPostProps {
	usage: 'create' | 'edit';
}

export interface IEditPostPayload {
	id: string;
	post: IPostFormData;
}
