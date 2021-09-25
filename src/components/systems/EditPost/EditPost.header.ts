import { IAction } from '../../layout/PageLayout/PageLayout.types';
import { Routes } from '../../../router/routes';

const editPostActions: IAction[] = [
	{
		href: Routes.MANAGE_POSTS,
		label: 'Back',
	},
];

export default editPostActions;
