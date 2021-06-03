import {createAsyncThunk} from "@reduxjs/toolkit";
import PostsApi from "../../../../../api/cms/cms";

const createNewPost = createAsyncThunk(
    'createNewPost',
    async (post: string) => {
        const response = await PostsApi.createNewPost(post)
        // The value we return becomes the `fulfilled` action payload
        return post;
    }
);

export default createNewPost;