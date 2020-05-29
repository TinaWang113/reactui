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
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    height:400,
  },
    title: {
      fontSize: 14,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
   
  }));

const ItemCard =(props) =>{
    const classes = useStyles();
    //const [expanded, setExpanded] = React.useState(false);
    //get data
    const {title, price, description, imgSrc, avatarUrl, ingredients} = props;
    /*
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
*/

    return (
       <Card className={classes.root}>
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
        <Typography variant="body2" component="p">
          {ingredients}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Customsize</Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;