import React from 'react';

import { AppBar, Toolbar } from '@material-ui/core';
import { HomeOutlined } from '@material-ui/icons';

import SafeGrid from '../SafeGrid/SafeGrid.component';
import IconLink from '../../reusable/IconLink';
import { Routes } from '../../../router/routes';

const Navbar = () => {
	return (
		<>
			<AppBar color={'secondary'} elevation={0}>
				<SafeGrid mainColumn>
					<Toolbar variant={'dense'}>
						<IconLink
							children={<HomeOutlined color={'primary'} />}
							url={Routes.HOME}
						/>
					</Toolbar>
				</SafeGrid>
			</AppBar>
		</>
	);
};

export default Navbar;
