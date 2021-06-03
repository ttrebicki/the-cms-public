import {createAsyncThunk} from "@reduxjs/toolkit";
import PostsApi from "../../../api/cms/cms";

const getPostsFromAPI = createAsyncThunk(
    'getPostsFromAPI',
    async (_id?: string) => {

        const response = await PostsApi.getPosts(_id && _id);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export default getPostsFromAPI;