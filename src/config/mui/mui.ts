import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            contrastText: '#EEEEEE',
            main: '#546E7A'
        },
        secondary: {
            main: '#424242'
        },
        background: {
            default: '#808E95',
            paper: '#424242'
        }
    },
})