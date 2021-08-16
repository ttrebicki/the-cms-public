import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';

import { Button, TextField, Typography } from '@material-ui/core';

import { getSelectedPost } from '../../../PostsManager/PostsManager.slice';

import SafeGrid from '../../../../layoutComponents/SafeGrid/SafeGrid.component';
import { createNewPost, editPost } from './EditPost.thunks';
import { IEditPostProps } from './EditPost.types';

const EditPost = ({ usage }: IEditPostProps) => {
	const dispatch = useDispatch();
	const selectedPost = useSelector(getSelectedPost);

	const isCreate = usage === 'create';
	const isEdit = usage === 'edit';

	const headingText = isCreate ? 'Create New Post' : 'Edit post';
	const ctaButtonText = isCreate ? 'Create New Post' : 'Update the Post';

	const formik = useFormik({
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

	// if (selectedPost) {
	//     formik.setFieldValue('title', selectedPost ? selectedPost.title : '');
	//     formik.setFieldValue('content', selectedPost ? selectedPost.content : '');
	//     formik.setFieldValue('thumbnailImage', selectedPost ? selectedPost.thumbnailImage : '');
	// }

	return (
		<SafeGrid spacing={16}>
			<Typography variant={'h4'}>{headingText}</Typography>
			<form onSubmit={formik.handleSubmit} className={'form'}>
				<SafeGrid spacing={8}>
					<TextField
						onChange={formik.handleChange}
						id={'title'}
						name={'title'}
						type={'title'}
						value={formik.values.title}
						variant={'outlined'}
						label={'Title'}
						required
						fullWidth
					/>
					<TextField
						onChange={formik.handleChange}
						id={'content'}
						name={'content'}
						type={'content'}
						value={formik.values.content}
						variant={'outlined'}
						label={'Content'}
						multiline
						required
						fullWidth
					/>
					<TextField
						onChange={formik.handleChange}
						id={'thumbnailImage'}
						name={'thumbnailImage'}
						type={'thumbnailImage'}
						value={formik.values.thumbnailImage}
						variant={'outlined'}
						label={'Thumbnail Image URL'}
						fullWidth
					/>
					<Button
						fullWidth
						variant={'outlined'}
						color={'primary'}
						type={'submit'}
						size={'large'}
					>
						{ctaButtonText}
					</Button>
				</SafeGrid>
			</form>
		</SafeGrid>
	);
};

export default EditPost;
