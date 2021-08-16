import { store } from '../../../../../../app/store';
import { toggleEditPost } from '../../../PostsManager.slice';
import getPostsFromAPI from '../../../../../../models/global/actions/getPostsFromApi';

const belowTableButtons = [
	{
		callback: () => {
			store.dispatch(toggleEditPost());
		},
		label: 'Edit',
	},
	{
		callback: () => {},
		label: 'Delete',
	},
	{
		callback: () => {
			store.dispatch(getPostsFromAPI());
		},
		label: 'Refresh the list',
	},
];

export default belowTableButtons;
