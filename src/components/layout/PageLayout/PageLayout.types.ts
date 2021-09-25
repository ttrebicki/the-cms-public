export interface IAction {
	callback?: () => void;
	href?: string;
	label: string;
}

export interface IPageLayoutHeaderProps {
	actions?: IAction[];
	title: string;
}
