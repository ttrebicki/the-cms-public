import React, { useEffect } from 'react';

import { Typography } from '@material-ui/core';

import {
	PageLayoutContent,
	PageLayoutHeader,
} from '../../layout/PageLayout/PageLayout.component';
import SafeGrid from '../../layout/SafeGrid/SafeGrid.component';
import postsManageActions from './PostsManager.header';
import PostsManagerTable from './components/PostsManagerTable/PostsManagerTable.component';
import { getPostsFromAPI } from '../../../state/posts/thunks';
import texts from '../../../consts/texts';
import { useAppDispatch } from '../../../state/hooks';

const PostsManager = () => {
	const dispatch = useAppDispatch();
	const txt = texts.postManager;

	useEffect(() => {
		dispatch(getPostsFromAPI());
	});

	return (
		<SafeGrid spacing={32}>
			<PageLayoutHeader title={txt.header} actions={postsManageActions} />
			<PageLayoutContent>
				<SafeGrid spacing={32}>
					<SafeGrid spacing={16}>
						<Typography variant={'h4'}>{txt.managePosts}</Typography>
						<Typography variant={'body1'}>{txt.managePostsDesc}</Typography>
						<PostsManagerTable />
					</SafeGrid>
				</SafeGrid>
			</PageLayoutContent>
		</SafeGrid>
	);
};

export default PostsManager;
