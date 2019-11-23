import React from 'react';
import classes from './Shell.css';

const Shell = props => {
    return (
        <div className={classes.Shell}>
            {props.children}
        </div>
    );
}

export default Shell;
