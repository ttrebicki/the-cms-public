import {store} from "../../../app/store";
import {toggleCreateNewPost} from "./PostsManager.slice";

import {IAction} from "../../layoutComponents/PageLayout/PageLayout.types";

const PostsManageActions: IAction[] = [
    {
        callback: () => store.dispatch(toggleCreateNewPost()),
        label: 'Create New Post',
    },
    {
        callback: () => {
        },
        label: 'Manage Posts',
    }
]

export default PostsManageActions;