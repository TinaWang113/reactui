import React from 'react';
import ItemCard from './ItemCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginLeft: theme.spacing(2),
    },
  }));
  

const Content =() =>{
    const classes = useStyles();
   return (
    <div className={classes.root}>
       <Grid container spacing ={4}
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
        >
           <Grid item xs={12} sm={6} >
           <ItemCard 
           title="Mother's Day Special" 
           subtitle = "Limited offer" 
           data= {Date} 
           price = "120 CAD"
           description = "It's party combo for Mother's day. It's good for 4-5 people."
           //temp
           imgSrc="https://imgur.com/HpkGimC.jpg"
           ingredients = "rice, fish, and so on....."
           />
           </Grid>
           <Grid item xs={12} sm={6} >
           <ItemCard 
           title="Mother's Day Special -2" 
           subtitle = "Limited offer" 
           data= {Date} 
           price = "120 CAD"
           description = "It's party combo for Mother's day. It's good for 4-5 people."
           imgSrc="https://imgur.com/9gDlsAd.jpg"
           ingredients = "rice, fish, and so on....."
           />
           </Grid>
       </Grid>  
    </div>
   );
};

export default Content;