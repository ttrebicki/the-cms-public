import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline, Typography } from '@material-ui/core';

import SafeGrid from './components/layoutComponents/SafeGrid/SafeGrid.component';
import { PageLayoutHeader } from './components/layoutComponents/PageLayout/PageLayout.component';

import PostsManager from './components/systems/PostsManager/PostsManager.component';
import Navbar from './components/layoutComponents/Navbar/Navbar.component';

const App = () => {
	const appNameHeaderText = 'The CMS';
	const footerText = 'Copyright 2021 hmm.xd';

	return (
		<>
			<CssBaseline />
			<Router>
				<SafeGrid spacing={80} mainColumn>
					<Navbar />

					<Switch>
						<Route exact path={'/manage-posts'}>
							<PostsManager />
						</Route>
						<Route exact path={'/'}>
							<PageLayoutHeader title={appNameHeaderText} />
						</Route>
					</Switch>

					<SafeGrid spacing={32} padding={32} background>
						<Typography variant={'caption'}>{footerText}</Typography>
					</SafeGrid>
				</SafeGrid>
			</Router>
		</>
	);
};

export default App;
