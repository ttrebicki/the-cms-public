import { store } from '../../../../../../state/store';
import { deletePost } from '../../../../../../state/posts/thunks';
import { Routes } from '../../../../../../router/routes';
import { IAction } from '../../../../../layout/PageLayout/PageLayout.types';

const belowTableButtons = ({ id }: { id: string }): IAction[] => [
	{
		href: Routes.EDIT_POST,
		label: 'Edit',
	},
	{
		callback: () => {
			store.dispatch(deletePost(id));
		},
		label: 'Delete',
	},
];

export default belowTableButtons;
