import React, { createRef, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Button, TextField, useTheme } from '@material-ui/core';
import Editor from 'rich-markdown-editor';
import DropboxChooser from 'react-dropbox-chooser';

import { getSelectedPost } from '../../../state/posts/slices/PostsManager.slice';
import SafeGrid from '../../layout/SafeGrid/SafeGrid.component';
import { IEditPostProps } from './EditPost.types';
import texts from '../../../consts/texts';
import useFormikHook from './hooks/useFormik';
import { PageLayoutHeader } from '../../layout/PageLayout/PageLayout.component';
import editPostActions from './EditPost.header';
import useStyles from './EditPost.styles';

const EditPost = ({ usage }: IEditPostProps) => {
	const selectedPost = useSelector(getSelectedPost);
	const isCreate = usage === 'create';
	const isEdit = usage === 'edit';
	const formik = useFormikHook({ isCreate, isEdit, selectedPost });
	const txts = texts.postManager.editPost;
	const headingText = isCreate ? txts.createPost : txts.editPost;
	const ctaButtonText = isCreate ? txts.createPost : txts.updatePost;

	const handleChange = (value: () => string) => {
		formik.values.content = value();
	}

	const theme = useTheme();
	const classes = useStyles(theme);

	return (
		<SafeGrid spacing={32}>
			<PageLayoutHeader title={headingText} actions={editPostActions} />
			<form onSubmit={formik.handleSubmit} className={'form'}>
				<SafeGrid spacing={16}>
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
						id={'thumbnailImage'}
						name={'thumbnailImage'}
						type={'thumbnailImage'}
						value={formik.values.thumbnailImage}
						variant={'outlined'}
						label={'Thumbnail Image URL'}
						fullWidth
					/>
					<DropboxChooser appKey={'a0kj2d0xe9aw6se'}
																					success={(files: any) => window.navigator.clipboard.writeText(files[0].link)}
																					cancel={() => console.log('closed')}
																					multiselect={true}>
						<Button type={'button'}>Dropbox</Button>
					</DropboxChooser>
					<Editor
						className={classes.editor}
						defaultValue={formik.values.content}
						dark={true}
						autoFocus={true}
						onChange={handleChange}
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
					<Editor
						readOnly={true}
						value={formik.values.content}
						dark={true}
						className={classes.editor}
					/>
				</SafeGrid>
			</form>
		</SafeGrid>
	);
};

export default EditPost;
