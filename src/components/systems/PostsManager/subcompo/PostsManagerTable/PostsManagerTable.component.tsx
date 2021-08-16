import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DataGrid } from '@material-ui/data-grid';

import SafeGrid from '../../../../layoutComponents/SafeGrid/SafeGrid.component';
import ButtonRow from '../../../../molecules/ButtonRow/ButtonRow.component';

import belowTableButtons from './utils/buttons';
import columns from './utils/columns';
import useStyles from '../../PostsManager.stylesMUI';
import { selectPosts, setSelectedPost } from '../../PostsManager.slice';

const PostsManagerTable = () => {
	const dispatch = useDispatch();
	const posts = useSelector(selectPosts);

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

	return (
		<SafeGrid spacing={16}>
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
			<ButtonRow actions={belowTableButtons} />
		</SafeGrid>
	);
};

export default PostsManagerTable;
