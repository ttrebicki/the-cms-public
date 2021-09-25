import { IAction } from '../../layout/PageLayout/PageLayout.types';
import { Routes } from '../../../router/routes';

const postsManageActions: IAction[] = [
	{
		href: Routes.CREATE_POST,
		label: 'Create New Post',
	},
];

export default postsManageActions;
