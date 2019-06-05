import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Delete from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#009fdf',
    cursor: 'pointer',
  },
  iconLabel: {
    color: '#009fdf',
    fontSize: 12, 
    display: 'inline-block',
    verticalAlign: 'super',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 'bold',
    cursor: 'pointer',
    paddingLeft: 5,
  }
}));

function IconDelete() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Delete className={classes.icon} />
      <span className={classes.iconLabel}>Delete</span>
    </div>
  );
}

export default IconDelete;
