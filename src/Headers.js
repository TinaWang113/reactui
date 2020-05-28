import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({

  status: {
    danger: 'orange',
  },

  root: {
    flexGrow: 1,
    marginLeft: theme.spacing(3),

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  }));
  

const Headers = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleClose = () => {
    setAnchorEl(null);
    //update menu
  };

  return (
    <div className={classes.root} >
      <AppBar className="Appbar" position ="static">
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton}  
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Papular</MenuItem>
            <MenuItem onClick={handleClose}>Sashimi</MenuItem>
            <MenuItem onClick={handleClose}>Sushi</MenuItem>
            <MenuItem onClick={handleClose}>Maki Roll</MenuItem>
            <MenuItem onClick={handleClose}>KOTO Chef Special - Mki Roll</MenuItem>
            <MenuItem onClick={handleClose}>Soup & Salad</MenuItem>
            <MenuItem onClick={handleClose}>Appetizer</MenuItem>
            <MenuItem onClick={handleClose}>Bento Box & Tempura</MenuItem>
            <MenuItem onClick={handleClose}>Ramen&Udon</MenuItem>
            <MenuItem onClick={handleClose}>Beverages</MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title} align="center">
            <b>Welcome to Tina online order system</b>
          </Typography>
          <Button color="inherit" onClick="{Login}">Login</Button>
        </Toolbar>

      </AppBar>
      
    </div>
  );

}
export default Headers;