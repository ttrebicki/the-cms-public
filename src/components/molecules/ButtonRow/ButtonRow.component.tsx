import React, { useState } from 'react';

import { Button } from '@material-ui/core';

import SafeGrid from '../../layout/SafeGrid/SafeGrid.component';
import { IButtonRowProps } from './ButtonRow.types';
import { Redirect } from 'react-router-dom';
import { store } from '../../../state/store';

const ButtonRow = ({ actions }: IButtonRowProps) => {
	const [isRedirect, setRedirect] = useState(false);

	return (
		<SafeGrid spacing={8} direction={'row'}>
			{actions.map((action, index) => {
				{
					/* TODO: refactor */
				}
				if (action.href) {
					if (isRedirect) {
						return (
							<Redirect
								to={{
									pathname: action.href,
									state: store.getState(),
								}}
							/>
						);
					}

					return (
						<Button
							key={index}
							variant={'contained'}
							color={'primary'}
							onClick={() => setRedirect(true)}
						>
							{action.label}
						</Button>
					);
				}

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
						variant={'contained'}
						color={'secondary'}
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
