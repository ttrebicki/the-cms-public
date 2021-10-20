import { Divider, Typography } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

import { useAppSelector } from '../../../state/hooks';
import { getSelectedPost } from '../../../state/posts/slices/PostsManager.slice';
import SafeGrid from '../../layout/SafeGrid/SafeGrid.component';

const PostLivePreviewComponent = () => {
	const currentPost = useAppSelector(getSelectedPost);

	if (!currentPost) {
		return null;
	}
	const HTML = new RegExp('/<\\/?[a-z][\\s\\S]*>/i');
	const isContentHTML = HTML.test(currentPost.content);

	return (
		<SafeGrid direction={'column'} spacing={32}>
			<img src={currentPost.thumbnailImage} width={420} height={'auto'} />
			<Typography variant={'h2'}>{currentPost.title}</Typography>
			<Divider />
			<ReactMarkdown children={currentPost.content} />
			<div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
			{/*{!isContentHTML && <Typography variant={'body1'}>{currentPost.content}</Typography>}*/}
			{/*{isContentHTML && <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />}*/}
		</SafeGrid>
	);
};

export default PostLivePreviewComponent;
