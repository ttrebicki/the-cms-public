import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import {Editor, EditorState} from 'draft-js';

import { getSelectedPost } from '../../../state/posts/slices/PostsManager.slice';
import SafeGrid from '../../layout/SafeGrid/SafeGrid.component';
import { IEditPostProps } from './EditPost.types';
import texts from '../../../consts/texts';
import useFormikHook from './hooks/useFormik';
import {
	PageLayoutContent,
	PageLayoutHeader,
} from '../../layout/PageLayout/PageLayout.component';
import editPostActions from './EditPost.header';
import PostLivePreviewComponent from '../PostLivePreview';

const EditPost = ({ usage }: IEditPostProps) => {
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty(),
	);
	const selectedPost = useSelector(getSelectedPost);
	const isCreate = usage === 'create';
	const isEdit = usage === 'edit';
	const formik = useFormikHook({ isCreate, isEdit, selectedPost });
	const txts = texts.postManager.editPost;
	const headingText = isCreate ? txts.createPost : txts.editPost;
	const ctaButtonText = isCreate ? txts.createPost : txts.updatePost;

	return (
		<>
			<PageLayoutHeader title={headingText} actions={editPostActions} />
			<PageLayoutContent>
				<SafeGrid spacing={80}>
					<PostLivePreviewComponent />
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
							{/*<Editor editorState={editorState} onChange={formik.handleChange}/>*/}
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
			</PageLayoutContent>
		</>
	);
};

export default EditPost;
