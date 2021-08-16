import React from 'react';

import { Button } from '@material-ui/core';

import SafeGrid from '../../layoutComponents/SafeGrid/SafeGrid.component';
import { IButtonRowProps } from './ButtonRow.types';

const ButtonRow = ({ actions }: IButtonRowProps) => {
	return (
		<SafeGrid spacing={8} direction={'row'}>
			{actions.map((action, index) => {
				if (index === 0) {
					return (
						<Button
							key={index}
							variant={'contained'}
							color={'primary'}
							onClick={action.callback}
						>
							{action.label}
						</Button>
					);
				}

				return (
					<Button
						key={index}
						variant={'outlined'}
						color={'primary'}
						onClick={action.callback}
					>
						{action.label}
					</Button>
				);
			})}
		</SafeGrid>
	);
};

export default ButtonRow;
