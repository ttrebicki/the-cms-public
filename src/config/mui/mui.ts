import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
	overrides: {
		MuiIcon: {
			colorPrimary: {
				color: '#80d8ff',
			},
		},
		MuiToolbar: {
			dense: {
				justifyContent: 'right',
			},
		},
	},
	palette: {
		primary: {
			contrastText: '#1b1b1b',
			main: '#80d8ff',
		},
		secondary: {
			contrastText: '#efefef',
			main: '#1b1b1b',
		},
		background: {
			default: '#1b1b1b',
			paper: '#2b2b2b',
		},
		text: {
			primary: '#eeeeee',
			secondary: '#dddddd',
		},
	},
	typography: {
		fontFamily: ['Poppins', 'sans-serif'].join(','),
	},
});
