import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {Button, Typography } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
  hellowThemeStyle:{
    fontStyle: 'oblique',
    fontSize:"30px",
  },
  buttonStyles:{
    color:"green",
    border:0
  }

});

export default function App() {
    const classes = useStyles();

    return (
      <div className="App">   
      <Typography 
        className={classes.hellowThemeStyle}
        align="center" 
        color ="primary" 
        variant="h1"
      >
            Helow there
        </Typography>   
        <IconButton color="primary" aria-label="upload picture" component="span">
          Here is test IconButton
        </IconButton>
        <Button disable variant="outlined">Here is test for Button</Button>
        </div>
    );
}

