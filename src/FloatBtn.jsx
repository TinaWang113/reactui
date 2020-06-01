import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    position: 'relative',
  },  
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function FloatBtn() {
  const classes = useStyles();
  //having to add previouse page if it exists.
  return (
    <div className={classes.root}>
      <Fab className={classes.fab} color="primary" aria-label="Next Page">
        <NavigateNextIcon />
      </Fab>
    </div>
  );
}

export default FloatBtn;