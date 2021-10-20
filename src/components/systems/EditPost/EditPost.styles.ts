import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		editor: {
			'& > div': {
				minHeight: '100vh',
				overflowY: 'scroll',
				padding: 32,
			},
			height: '100vh',
			overflowY: 'hidden',
		},
	})
);

export default useStyles;
