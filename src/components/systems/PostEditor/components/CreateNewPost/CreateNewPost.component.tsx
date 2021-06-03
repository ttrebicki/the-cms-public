import React from 'react';
import {useDispatch} from "react-redux";

import { useFormik } from 'formik';
import * as queryString from 'querystring';

import { Button,  TextField, Typography } from "@material-ui/core";

import SafeGrid from "../../../../layoutComponents/SafeGrid/SafeGrid.component";
import createNewPost from "./CreateNewPost.actions";

const CreateNewPost = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            'content': '',
            'thumbnailImage': '',
            'title': '',
            'images[0]': '',
        },
        onSubmit: values => {
            const postPayload = JSON.stringify(values);

            dispatch(createNewPost(postPayload));
        },
    });

    return (
        <SafeGrid spacing={16}>
                <Typography variant={'h4'}>Create a New Post</Typography>
                    <form onSubmit={formik.handleSubmit} className={'form'}>
                        <SafeGrid spacing={8}>
                        <TextField
                            onChange={formik.handleChange}
                            id={'title'}
                            name={'title'}
                            type={'title'}
                            value={formik.values.title}
                            variant={'outlined'}
                            label={'Title'}
                            required
                            fullWidth
                        >
                        </TextField>
                        <TextField
                            onChange={formik.handleChange}
                            id={'content'}
                            name={'content'}
                            type={'content'}
                            value={formik.values.content}
                            variant={'outlined'}
                            label={'Content'}
                            multiline
                            fullWidth
                        >
                        </TextField>
                        <TextField
                            onChange={formik.handleChange}
                            id={'thumbnailImage'}
                            name={'thumbnailImage'}
                            type={'thumbnailImage'}
                            value={formik.values.thumbnailImage}
                            variant={'outlined'}
                            label={'Thumbnail Image URL'}
                            fullWidth
                        >
                        </TextField>
                        <Button fullWidth variant={'outlined'} color={'primary'} type={'submit'} size={'large'}>
                            Create a new post
                        </Button>
                        </SafeGrid>
                    </form>
        </SafeGrid>
    )
}

export default CreateNewPost;