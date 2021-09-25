import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { ISafeGridStyleProps } from './SafeGrid.types';

const useStyles = ({
	safeDirection,
	safePadding,
	safeSpacing,
	safeFillContainer,
}: ISafeGridStyleProps) =>
	makeStyles((theme: Theme) =>
		createStyles({
			root: {
				display: 'flex',
				flexDirection: safeDirection,
				flexWrap: 'wrap',
				padding: safePadding,
				marginRight: safeDirection === 'column' ? -safeSpacing : 0,
				marginBottom: safeDirection === 'row' ? -safeSpacing : 0,
				width: '100%',
			},
			withBackground: {
				background: theme.palette.background.paper,
			},
			mainColumn: {
				margin: 'auto !important',
				maxWidth: theme.breakpoints.values.lg,
			},
			childColumn: {
				flex: safeFillContainer ? '1' : 'unset',
				flexDirection: safeDirection,
				marginBottom: safeSpacing,
				'& :last-of-type': {
					marginBottom: 0,
				},
			},
			childRow: {
				flex: safeFillContainer ? '1' : 'unset',
				flexDirection: safeDirection,
				marginBottom: safeSpacing,
				marginRight: safeSpacing,
				'& :last-of-type': {
					marginRight: 0,
				},
			},
		})
	);

export default useStyles;
