import React from 'react';

import { CssBaseline, Typography } from '@material-ui/core';

import SafeGrid from './components/layout/SafeGrid/SafeGrid.component';
import Navbar from './components/layout/Navbar/Navbar.component';
import Router from './router';
import texts from './consts/texts';

const App = () => {
	return (
		<>
			<CssBaseline />
			<SafeGrid spacing={80} mainColumn>
				<Navbar />
				<Router />
				<SafeGrid spacing={32} padding={32} background>
					<Typography variant={'caption'}>{texts.footer.copyright}</Typography>
				</SafeGrid>
			</SafeGrid>
		</>
	);
};

export default App;
