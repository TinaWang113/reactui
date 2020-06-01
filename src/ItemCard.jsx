import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) =>({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    maxWidth: 400,
    borderRadius: 10,
    borderColor: '#003366',
  },
    title: {
      fontSize: 14,
    },
    media: {
      /*
      height: 0, 
      width: '100%',
      paddingTop: '56.25%', // 16:9
      */
     height: 150,     // as an example I am modifying width and height
     width: '50%',
     marginLeft: '25%',
      
    },
    buttonStyle:{
      color:"blue",
      '&:hover': {
        backgroundColor: '#B2DF1E',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
   
  }));

const ItemCard =(props) =>{
    const classes = useStyles();
    const {title, price, description, imgSrc, avatarUrl, ingredients} = props;
    return (
       <Card className={classes.root} variant="outlined">
       <CardHeader
        avatar={ <Avatar alt="Menu" src={avatarUrl} className={classes.avatar} /> }
        action ={
          <IconButton color="primary" aria-label="add one">
          <AddIcon  />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia
        className={classes.media}
        image={imgSrc}
        title={title}
      />
      <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom noWrap>
            {description}
          </Typography>
          <Typography variant="subtitle1">
            Material/ Ingredients:
          </Typography>
          <Typography variant="textSecondary" component="p">
            {ingredients}
          </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.buttonStyle} fullWidth size="small">Customsize</Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;