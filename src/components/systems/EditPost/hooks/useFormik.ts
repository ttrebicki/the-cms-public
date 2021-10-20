import { useFormik } from 'formik';

import { createNewPost, editPost } from '../../../../state/posts/thunks';
import { useAppDispatch } from '../../../../state/hooks';
import { IFormikProps } from '../EditPost.types';
import { Routes } from '../../../../router/routes';

const useFormikHook = ({ isCreate, isEdit, selectedPost }: IFormikProps) => {
	const dispatch = useAppDispatch();

	return useFormik({
		initialValues:
			isEdit && selectedPost
				? {
						content: selectedPost.content,
						thumbnailImage: selectedPost.thumbnailImage,
						title: selectedPost.title,
						'images[0]': selectedPost.images[0],
				  }
				: {
						content: '',
						thumbnailImage: '',
						title: '',
						'images[0]': '',
				  },
		onSubmit: (values) => {
			const createPostPayload = values;
			const editPostPayload = {
				id: selectedPost ? selectedPost._id : 'id_unknown',
				post: values,
			};

			isCreate
				? dispatch(createNewPost(createPostPayload))
				: dispatch(editPost(editPostPayload));
		},
	});
};

export default useFormikHook;
