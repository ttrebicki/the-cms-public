export interface IAction {
    callback: () => void;
    label: string;
}

export interface IPageLayoutHeaderProps {
    actions?: IAction[];
    title: string;
}