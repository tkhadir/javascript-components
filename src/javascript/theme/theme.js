import {createMuiTheme} from 'material-ui';
import {blueGrey, lightBlue, red, grey, purple, green, orange} from 'material-ui/colors/index'

// All the following keys are optional.
// We try our best to provide a great default value.
let theme = createMuiTheme({
    palette: {
        background: {
            global: grey[200],
        },
        contrastThreshold: 3.1,
        tonalOffset: 0.2,
        primary: {
            main: blueGrey[600],
        },
        secondary: {
            main: lightBlue[600],
        },
        error: {
            main: red.A400,
        },
    },
    custom: {
        publish: {
            main: orange.A400,
            contrastText: "#fff",
        },
        enabled: {
            main: green.A400,
            contrastText: "#fff",
        },
        delete: {
            main: red.A400,
            contrastText: "#fff",
        }
    },
    overrides: {
        MuiButton: {
            root: {
                color: "inherit",
            }
        },
        MuiTableCell: {
            body: {
                color: "inherit",
            }
        },
        MuiIconButton: {
            root: {
                color: "inherit",
            }
        },
        MuiCheckbox: {
            default: {
                color: "inherit",
            }
        }
    }
});

let darkTheme = createMuiTheme({
    palette: {
        type: "dark",
        background: {
            global: grey[900]
        },
        contrastThreshold: 3.0,
        tonalOffset: 0.2,
        primary: {
            main: purple[500]
        },
        secondary: {
            main: green[400]
        },
        error: {
            main: red[200]
        },
    },
});


export {theme, darkTheme}
