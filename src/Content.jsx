import React from 'react';
import ItemCard from './ItemCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import itemList from './constans';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  }));
  

const Content =() => {
  const getItemList = (itemObject) =>{
    return (
      <Grid item xs={12} sm={4} > 
      <ItemCard {...itemObject} />
      </Grid>  
    
    );
  };

  const classes = useStyles();
   return (
    <div className={classes.root}>
       <Grid container spacing ={2}
        direction="row"
        ustify="space-evenly"
        alignItems="flex-start"
        > 
            {itemList.map(itemObject =>  getItemList(itemObject))}
       </Grid>  
    </div>
   );
};

export default Content;