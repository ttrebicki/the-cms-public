import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Routes } from './routes';
import PostsManager from '../components/systems/PostsManager/PostsManager.component';
import EditPost from '../components/systems/EditPost/EditPost.component';

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={Routes.MANAGE_POSTS}>
					<PostsManager />
				</Route>
				<Route exact path={Routes.CREATE_POST}>
					<EditPost usage={'create'} />
				</Route>
				<Route exact path={Routes.EDIT_POST}>
					<EditPost usage={'edit'} />
				</Route>
				<Route exact path={Routes.HOME}></Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
