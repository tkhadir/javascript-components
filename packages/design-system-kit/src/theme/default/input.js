const dsInput = theme => ({
    root: {},
    error: {
        '& input': {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.text.contrastText
        },
        '& div div': {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.text.contrastText
        },
        '& svg': {
            color: '#F5F5F5'
        }
    },
    disabled: {
        '& input': {
            backgroundColor: theme.palette.background.disabled,
            boxShadow: 'none'
        }
    },
    input: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        borderRadius: 1,
        fontSize: '0.875rem',
        padding: '6px 10px',
        transitionDuration: 0.3,
        '&[readonly]': {
            backgroundColor: 'rgba(252, 253, 253, 0.5)',
            boxShadow: 'none'
        },
        '&[required]': {
            backgroundColor: theme.palette.background.default
        },
        '&:focus': {
            boxShadow: theme.shadows[8]
        }
    },
    underline: {
        '&:hover': {
            borderBottom: '1px solid ' + theme.palette.primary.main + '!important'
        },
        '&:before': {
            borderBottom: '1px solid ' + theme.palette.border.main + '!important'
        }
    }
});
const dsInputBase = () => ({

});
export {dsInput, dsInputBase};

