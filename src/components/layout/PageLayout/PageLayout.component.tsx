import React, { FC } from 'react';

import { Typography } from '@material-ui/core';

import SafeGrid from '../SafeGrid/SafeGrid.component';
import { IPageLayoutHeaderProps } from './PageLayout.types';
import ButtonRow from '../../molecules/ButtonRow/ButtonRow.component';

const PageLayoutHeader = ({ title, actions }: IPageLayoutHeaderProps) => {
	return (
		<SafeGrid spacing={32} padding={32} background elevation>
			<Typography variant={'h2'}>{title}</Typography>
			{actions && <ButtonRow actions={actions} />}
		</SafeGrid>
	);
};

const PageLayoutContent: FC = ({ children }) => {
	return (
		<SafeGrid spacing={32} padding={32} direction={'column'} background elevation>
			{children}
		</SafeGrid>
	);
};

export { PageLayoutHeader, PageLayoutContent };
