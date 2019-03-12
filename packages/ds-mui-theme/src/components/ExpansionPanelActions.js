import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
/* Wrapped component */
import {ExpansionPanelActions as MuiExpansionPanelActions, withStyles} from '@material-ui/core';

/* Styles applied in the component.
* root: the style of the component itself
* attributeValue: when an attribute is set
*/
let styles = () => ({
    /* Styles applied to the root element. */
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 24px 32px',
        background: 'transparent'
    },
});

/*
   Set custom classes of component
 */
const getClasses = ({variant, classes: {root, action, ...dsClasses}}) => ({
    root: classnames(
        root,
        dsClasses[variant],
    ),
    action
});

/*
   Spread new classes into original component
 */
const ExpansionPanelActions = withStyles(styles, {name: 'DsExpansionPanelActions'})(
    ({variant, classes, ...props}) => (
        <MuiExpansionPanelActions classes={getClasses({variant, classes})} {...props}/>
    )
);

/*
  Proptype of component
 */
ExpansionPanelActions.propTypes = process.env.NODE_ENV !== 'production' ? {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
} : {};

/*
   Default Props
 */
ExpansionPanelActions.defaultProps = {
};

ExpansionPanelActions.displayName = 'DsExpansionPanelActions';

export default ExpansionPanelActions;
