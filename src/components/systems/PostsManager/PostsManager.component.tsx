import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import { Typography } from "@material-ui/core";

import { PageLayoutContent, PageLayoutHeader } from "../../layoutComponents/PageLayout/PageLayout.component";
import SafeGrid from "../../layoutComponents/SafeGrid/SafeGrid.component";

import PostsManageActions from "./PostsManager.header";
import PostsManagerTable from "./subcompo/PostsManagerTable/PostsManagerTable.component";
import getPostsFromAPI from "../../../models/global/actions/getPostsFromApi";
import CreateNewPost from "../PostEditor/components/CreateNewPost/CreateNewPost.component";
import { showCreateNewPostFromState } from "./PostsManager.slice";

const PostsManager = () => {

    const dispatch = useDispatch();
    dispatch(getPostsFromAPI());

    const showCreateNewPost = useSelector(showCreateNewPostFromState);

    const headerText = 'Posts manager';
    const manageText = 'Manage your posts';
    const manageDescriptionText = 'Here you can make changes to your posts, arrange them or delete them.';

    return (
        <SafeGrid spacing={32}>
            <PageLayoutHeader
                title={headerText}
                actions={PostsManageActions}/>
            <PageLayoutContent>
                <SafeGrid spacing={32} direction={'row'} fillContainer>
                    <SafeGrid spacing={16}>
                        <Typography variant={'h4'}>
                            {manageText}
                        </Typography>
                        <Typography variant={'body1'}>
                            {manageDescriptionText}
                        </Typography>
                        <PostsManagerTable />
                    </SafeGrid>
                    {showCreateNewPost && <CreateNewPost/>}
                </SafeGrid>
            </PageLayoutContent>
        </SafeGrid>
    )
}

export default PostsManager;