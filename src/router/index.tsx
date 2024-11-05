import React from 'react';

import { Route, Switch, HashRouter } from 'react-router-dom';

import { Routes } from './routes';
import PostsManager from '../components/systems/PostsManager/PostsManager.component';
import EditPost from '../components/systems/EditPost/EditPost.component';

const Router = () => {
	return (
		<HashRouter>
			<Switch>
				<Route exact path={Routes.CREATE_POST}>
					<EditPost usage={'create'} />
				</Route>
				<Route exact path={Routes.EDIT_POST}>
					<EditPost usage={'edit'} />
				</Route>
				<Route exact path={Routes.HOME}>
					<PostsManager />
				</Route>
			</Switch>
		</HashRouter>
	);
};

export default Router;
