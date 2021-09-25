import React, { useState } from 'react';

import { DataGrid } from '@material-ui/data-grid';

import SafeGrid from '../../../../layout/SafeGrid/SafeGrid.component';
import ButtonRow from '../../../../molecules/ButtonRow/ButtonRow.component';
import belowTableButtons from './utils/buttons';
import columns from './utils/columns';
import useStyles from '../../PostsManager.stylesMUI';
import {
	getSelectedPost,
	selectPosts,
	setSelectedPost,
} from '../../../../../state/posts/slices/PostsManager.slice';
import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';

const PostsManagerTable = () => {
	const dispatch = useAppDispatch();
	const posts = useAppSelector(selectPosts);
	const selectedPost = useAppSelector(getSelectedPost);

	const rows = posts.map((post) => {
		return {
			id: post._id,
			postContent: post.content,
			postTitle: post.title,
			friendlyCreateDate: post.friendly_create_date,
			thumbnailUrl: post.thumbnailImage,
		};
	});

	const classes = useStyles();

	if (!posts) {
		return null;
	}

	return (
		<SafeGrid spacing={16}>
			{selectedPost && (
				<ButtonRow
					actions={belowTableButtons({
						id: selectedPost._id,
					})}
				/>
			)}
			<div className={classes.table}>
				<DataGrid
					columns={columns}
					rows={rows}
					pageSize={6}
					onRowClick={(row) => {
						dispatch(setSelectedPost(row.id));
					}}
				/>
			</div>
		</SafeGrid>
	);
};

export default PostsManagerTable;
