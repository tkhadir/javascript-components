import PropTypes from 'prop-types';
import React from 'react';
import {withStyles} from '@material-ui/core';
import {compose} from 'recompose';

const styles = () => ({
    root: {
        flex: '1 1 0%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0
    }
});

export const FullWidthContent = ({children, classes}) => (
    <div className={classes.root}>
        {children}
    </div>
);

FullWidthContent.propTypes = {
    children: PropTypes.element.isRequired,
    classes: PropTypes.object.isRequired
};

export default compose(
    withStyles(styles)
)(FullWidthContent);
